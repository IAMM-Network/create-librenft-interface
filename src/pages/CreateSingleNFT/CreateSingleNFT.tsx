import { useState, useEffect, createElement, useContext } from 'react'
import { DayRange } from 'react-modern-calendar-datepicker'
import { Flex, Grid, Box } from '../../components/Box'
import { Container } from '../../components/Layout'
import { Button } from '../../components/Button'
import {
  AlertIcon,
  KeyIcon,
  LoadingIcon,
  OpenEyeIcon,
  StarIcon,
  TextBaseIcon,
  TimelockIcon,
  VerticalBarsIcon,
  FreezeMetadata,
} from '../../components/Svg'
import { Toggle } from 'react-toggle-component'
import { TitleSection, Text, Section, Input, MediaWrapper, Preview, TextArea, Hr, A, GridContainer } from './styles'
import { mediaOptions } from './Data'
import CircleButton from './components/CircleButton'
import OwnershipLock from './components/dialogs/OwnershipLock'
import Properties from './components/dialogs/Properties'
import TimeLock from './components/dialogs/TimeLock'
import Levels from './components/dialogs/Levels'
import Stats from './components/dialogs/Stats'
import PinataService from '../../services/PINATA'
import NFTService from '../../services/NFTService'
import SelectCollection from './components/SelectCollection'
import Congratulations from './components/dialogs/Congratulations'
import FileUploader from './components/input/FileUploader'
import Selector from '../../components/Selector/Selector'
import { Tokens } from '../../components/Selector/types'
import { Context as UserProfile } from '../../contexts/UserProfile'
import NoWalletConnected from './components/NoWalletConnected'
import Whitelist from './components/Whitelist'
import InputPrice from '../../components/InputPrice/InputPrice'
import PaymentTokens from './components/PaymentToken'

const ethers = require('ethers')

const HeadPurple = require('../../assets/images/head-purple.png')

export enum PayerFee {
  Buyer,
  Creator,
}

export interface NftProperties {
  trait_type: string
  value: string | number
}

export interface NftLevels extends NftProperties {
  max_value?: number
}

export interface NftStats extends NftLevels {
  display_type: 'string' | 'number'
}

export interface NftMetadata {
  name: string
  symbol: string
  image_url: string
  description: string
  external_url: string
  properties: NftProperties[]
  levels: NftLevels[]
  stats: NftStats[]
}

export interface NFTTimeframe {
  from: number
  to: number
}

export interface NFTConfig {
  fractional: number
  rentable: boolean
  transferable: boolean
  timeframe: boolean
  unlockable: boolean | any
  nsfw: boolean
  supply: number
  creatorEarnings: string
  freeze_metadata: boolean
  payment_token: string
  price: string
  whitelist: string[]
}

export const defaultNftMetadata = {
  name: '',
  symbol: '',
  image_url: '',
  description: '',
  external_url: '',
  properties: [],
  levels: [],
  stats: [],
}

const nftDefaultConfig = {
  fractional: 0,
  rentable: false,
  transferable: false,
  timeframe: false,
  unlockable: false,
  nsfw: false,
  supply: 1,
  creatorEarnings: '',
  freeze_metadata: true,
  payment_token: ethers.constants.AddressZero,
  price: '0',
  // payer_fee: PayerFee.Buyer,
  whitelist: [],
}

export enum CreateSingleNftTypes {
  None,
  UploadingImageToIPFS,
  CreatingMetadata,
  FreezingMetadata,
  Minting,
}

const CreateSingleNFT = () => {
  // Context
  const { isConnected, networkId, setIsConnected, setContractAddress } = useContext(UserProfile)

  //media preview
  const [mediaSelected, setMediaSelected] = useState<number>(0)
  const [selectedFile, setSelectedFile] = useState(undefined)
  const [preview, setPreview] = useState<string>()

  //nft
  const [nftConfig, setNftConfig] = useState<NFTConfig>(nftDefaultConfig)
  const [nftMetadata, setNftMetadata] = useState<NftMetadata>(defaultNftMetadata)

  //switchs
  const [isFractional, setIsFractional] = useState<boolean>(false)
  const [isUnlockableContent, setIsUnlockableContent] = useState<boolean>(false)
  const [isCollectionSelected, setIsCollectionSelected] = useState<boolean>(false)
  const [isSelectCollectionOpen, setIsSelectCollectionOpen] = useState<boolean>(false)

  //file type options
  const [allowedFormats, setAllowedFormat] = useState<string[]>(mediaOptions[mediaSelected].formats)

  // whitelist options
  const [whitelist, setWhitelist] = useState<string[]>([])
  const [whitelistRoot, setWhitelistRoot] = useState<string | undefined>(undefined)

  //dialogs
  const [isOwnershipLock, setIsOwnershipLock] = useState<boolean>(false)
  const [isTimeLock, setIsTimeLock] = useState<boolean>(false)
  const [isProperties, setIsProperties] = useState<boolean>(false)
  const [isLevels, setIsLevels] = useState<boolean>(false)
  const [isStats, setIsStats] = useState<boolean>(false)

  //timelock options
  const [selectedTimeFrame, setSelectedTimeframe] = useState<DayRange>({
    from: null,
    to: null,
  })

  const [selectedRentableTimeFrame, setSelectedRentableTimeframe] = useState<DayRange>({
    from: null,
    to: null,
  })

  const [status, setStatus] = useState<CreateSingleNftTypes>(CreateSingleNftTypes.None)

  /// NFT minted status
  const [isNFTMinted, setIsNFTMinted] = useState<boolean>(false)
  const [imageCid, setImageCid] = useState<string>('')
  const [mintedContract, setMintedContract] = useState<string>('')

  const isOwnershipLockActive = () => nftConfig.rentable || nftConfig.fractional > 1
  const isTimelockActive = () =>
    (isUnlockableContent && nftConfig.unlockable && String(nftConfig.unlockable) !== '') ||
    (!!nftConfig.timeframe && !!selectedTimeFrame.from && !!selectedTimeFrame.to)
  const isPropertiesActive = () => nftMetadata.properties.length > 0
  const isLevelsActive = () => nftMetadata.levels.length > 0
  const isStatsActive = () => nftMetadata.stats.length > 0

  const isCreateActive = () => !!nftMetadata.name && !!preview

  //Collections
  const collections = [
    {
      id: 1,
      name: 'collection 1',
    },
    {
      id: 2,
      name: 'collection 2',
    },
    {
      id: 3,
      name: 'collection 3',
    },
    {
      id: 4,
      name: 'collection 4',
    },
  ]

  const REQUIRED_NETWORK_ID = 71401

  const NetworkConfig = {
    chainId: `0x${REQUIRED_NETWORK_ID.toString(16)}`,
    chainName: 'Godwoken Testnet',
    nativeCurrency: {
      name: 'pCKB',
      symbol: 'pCKB',
      decimals: 18,
    },
    rpcUrls: ['https://v1.testnet.godwoken.io/rpc'],
    blockExplorerUrls: ['https://v1.testnet.gwscan.com', 'https://gw-testnet-explorer.nervosdao.community'],
    iconUrls: ['https://raw.githubusercontent.com/nervosnetwork/ckb-explorer-frontend/master/public/favicon.ico'],
  }

  const getAccounts = async () => {
    const accounts: string[] = await window.ethereum.request({ method: 'eth_requestAccounts' })
    if (accounts.length > 0) setIsConnected(true)
    return accounts
  }

  async function addGodwokenNetwork() {
    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [NetworkConfig],
      })
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const MetaMaskInitialization = async () => {
    try {
      await getAccounts()
      if (networkId !== REQUIRED_NETWORK_ID) {
        await addGodwokenNetwork()
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    console.log(nftConfig)
  }, [nftConfig])

  useEffect(() => {
    console.log(nftMetadata)
  }, [nftMetadata])

  const onSelectedImage = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    setSelectedFile(e.target.files[0])
  }

  const getTextStatus = {
    [CreateSingleNftTypes.None]: 'Create',
    [CreateSingleNftTypes.UploadingImageToIPFS]: 'Uploading image to IPFS...',
    [CreateSingleNftTypes.CreatingMetadata]: 'Creating metadata...',
    [CreateSingleNftTypes.FreezingMetadata]: 'Freezing metadata...',
    [CreateSingleNftTypes.Minting]: 'Deploying...',
  }

  const createNFT = async () => {
    setStatus(CreateSingleNftTypes.UploadingImageToIPFS)
    const imageCID = await PinataService.PinImageToIPFS(selectedFile)

    setStatus(CreateSingleNftTypes.CreatingMetadata)
    const sanitizedJson = {
      ...nftMetadata,
      image_url: `https://gateway.pinata.cloud/ipfs/${imageCID}`,
    }

    setImageCid(imageCID)

    setStatus(CreateSingleNftTypes.FreezingMetadata)
    const cid = await PinataService.PinJSONToIPFS(sanitizedJson)

    console.log(cid)
    setStatus(CreateSingleNftTypes.Minting)

    const strMetadata = JSON.stringify(sanitizedJson)

    const mintedNFT = await NFTService.mintNFT(
      String(cid),
      nftConfig,
      nftMetadata.name,
      selectedRentableTimeFrame,
      selectedRentableTimeFrame,
      sanitizedJson.image_url,
      strMetadata
    )
    if (typeof mintedNFT !== 'undefined') {
      console.log(mintedNFT)
      setMintedContract(mintedNFT.address)
      setIsNFTMinted(true)
      setContractAddress(mintedNFT.address)
      sessionStorage.setItem('contractAddress', mintedNFT.address)
      sessionStorage.setItem('contractMetadata', strMetadata)      
    }
  }

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  return (
    <>
      <Container>
        {isNFTMinted && <Congratulations name={nftMetadata.name} contract={mintedContract} imageCid={imageCid} />}

        {isOwnershipLock && (
          <OwnershipLock
            selectedRentableTimeFrame={selectedRentableTimeFrame}
            setSelectedRentableTimeframe={setSelectedRentableTimeframe}
            isFractional={isFractional}
            nftConfig={nftConfig}
            setIsFractional={setIsFractional}
            setNftConfig={setNftConfig}
            setIsOwnershipLock={setIsOwnershipLock}
            onClose={() => setIsOwnershipLock(false)}
          />
        )}

        {isTimeLock && (
          <TimeLock
            nftConfig={nftConfig}
            isUnlockableContent={isUnlockableContent}
            selectedTimeFrame={selectedTimeFrame}
            setNftConfig={setNftConfig}
            setIsUnlockableContent={setIsUnlockableContent}
            setIsTimeLock={setIsTimeLock}
            onClose={() => setIsTimeLock(false)}
          />
        )}

        {isProperties && (
          <Properties
            onClose={() => setIsProperties(false)}
            nftMetadata={nftMetadata}
            setIsOwnershipLock={setIsProperties}
            setNftMetadata={setNftMetadata}
          />
        )}

        {isLevels && (
          <Levels onClose={() => setIsLevels(false)} nftMetadata={nftMetadata} setIsLevels={setIsLevels} setNftMetadata={setNftMetadata} />
        )}

        {isStats && (
          <Stats onClose={() => setIsStats(false)} nftMetadata={nftMetadata} setIsStats={setIsStats} setNftMetadata={setNftMetadata} />
        )}

        <Flex flexDirection='column' paddingTop='104px'>
          <TitleSection>
            <Text weight={600} size='21px'>
              Create libreNFT
            </Text>
            <Text>*Required fields</Text>
          </TitleSection>
          |
          <Section justifyContent='left'>
            <Text weight={600} size='14px'>
              Display name*
            </Text>
            <Input
              type='text'
              placeholder='Item name'
              value={nftMetadata.name}
              onChange={e => setNftMetadata({ ...nftMetadata, name: e.target.value })}
            />
          </Section>
          <Section justifyContent='left'>
            <Text weight={600} size='14px'>
              Token symbol*
            </Text>
            <Input
              type='text'
              maxLength={10}
              placeholder='Max 10 characters'
              value={nftMetadata.symbol}
              onChange={e => setNftMetadata({ ...nftMetadata, symbol: e.target.value })}
            />
          </Section>
          <Section>
            <Text weight={600} size='14px'>
              File type*
            </Text>

            <Grid gridTemplateColumns='1fr 1fr' gridTemplateRows='auto' gridGap='1rem' width='100%'>
              {mediaOptions.map((e, index) => (
                <MediaWrapper
                  style={{ cursor: index !== 3 ? 'pointer' : 'not-allowed' }}
                  key={`${index}-e`}
                  active={index === mediaSelected && index !== 3}
                  onClick={() => {
                    if (index !== 3) {
                      setSelectedFile(undefined)
                      setAllowedFormat(mediaOptions[index].formats)
                      setMediaSelected(index)
                      setPreview('')
                    }
                  }}
                >
                  <Grid>
                    {createElement(e.icon, {
                      fill: index === mediaSelected && index !== 3 ? 'white' : '#696969',
                      width: 70,
                      height: 70,
                    })}
                    <Text size='14px' weight={600} margin='0.5rem 0 0 0' color={index === mediaSelected ? 'white' : '#696969'}>
                      {e.text}
                    </Text>
                  </Grid>
                </MediaWrapper>
              ))}
            </Grid>
          </Section>
          <Section>
            <Text weight={600} size='14px'>
              Upload file*
            </Text>
            <Text margin='0.5rem 0 0 0'>File types supported: {allowedFormats.join(', ')}.</Text>
            <Text margin='0px'>Max Size: 15mb</Text>
            <FileUploader
              placeholder={selectedFile ? 'Uploaded file' : 'Upload file...'}
              handleFile={onSelectedImage}
              accept={allowedFormats.map(e => `.${e}`).join(', ')}
            />
          </Section>
          <Section>
            <Text weight={600} size='14px'>
              Preview
            </Text>
            <Preview>
              {!selectedFile && <img alt='head-purple' src={HeadPurple} />}
              {selectedFile && mediaSelected === 0 && <img alt='head-purple' src={selectedFile && preview} />}
              {selectedFile && mediaSelected === 1 && (
                <>
                  <video controls>
                    <source src={selectedFile && preview} />
                  </video>
                </>
              )}
            </Preview>
          </Section>
          <Section>
            <Text weight={600} size='14px'>
              External link
            </Text>
            <Text margin='0.5rem 0 0 0'>
              IAMM will add a link to this URL on this item's detail page, so that others can click to learn more about it. You are welcome
              to link to your own site with more details.
            </Text>
            <Input
              type='text'
              placeholder='https://yoursite.io/item/123'
              value={nftMetadata.external_url}
              onChange={e => setNftMetadata({ ...nftMetadata, external_url: e.target.value })}
            />
          </Section>
          <Section>
            <Text weight={600} size='14px'>
              Description
            </Text>
            <Text margin='0.5rem 0 0 0'>
              The description will be included on the item's detail page underneath its image. Markdown syntax is supported.
            </Text>
            <TextArea
              placeholder='We suggest a nice and detailed description for your item, but 120 character only.'
              value={nftMetadata.description}
              onChange={e => setNftMetadata({ ...nftMetadata, description: e.target.value })}
            />
            <Flex width='100%' justifyContent='center'>
              <Text size='14px' weight={400} margin='0.5rem 0 0 0'>
                (
                <A fontWeight={400} fontSize='12px' href='https://www.markdownguide.org/' target='_blank'>
                  Markdown
                </A>{' '}
                supported!)
              </Text>
            </Flex>
          </Section>
          <Section>
            <Text weight={600} size='14px'>
              How smart
            </Text>
            <Text margin='0.5rem 0 0 0'>Select the predefined smartPlugins</Text>

            <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 8fr 1fr' alignItems='center'>
              <Grid alignSelf='start' justifySelf='start' marginTop='8px'>
                <KeyIcon width={15} height={15} fill='#8B40F4' />
              </Grid>
              <Grid flexDirection='column' width='100%'>
                <Text weight={600}>Ownership Lock</Text>
                <Text margin='0'>Rentable, Fractional & Transferable</Text>
              </Grid>
              <Grid width='100%' alignItems='center' justifyContent='right'>
                <CircleButton active={isOwnershipLockActive()} onClick={() => setIsOwnershipLock(true)} />
              </Grid>
            </Grid>

            <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 8fr 1fr' alignItems='center'>
              <Grid alignSelf='start' justifySelf='start' marginTop='8px'>
                <TimelockIcon width={15} height={15} fill='#8B40F4' />
              </Grid>
              <Grid flexDirection='column' width='100%'>
                <Text weight={600}>Timelock</Text>
                <Text margin='0'>Unlockable Content & Timeframe</Text>
              </Grid>
              <Grid width='100%' alignItems='center' justifyContent='right'>
                <CircleButton active={isTimelockActive()} onClick={() => setIsTimeLock(true)} />
              </Grid>
            </Grid>

            <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 8fr 1fr' alignItems='center'>
              <Grid alignSelf='start' justifySelf='start' marginTop='8px'>
                <OpenEyeIcon width={15} height={15} fill='#696969' />
              </Grid>
              <Grid flexDirection='column' width='100%'>
                <Text color='#696969' weight={600}>
                  Generative
                </Text>
                <Text color='#696969' margin='0'>
                  Lorem ipsum dolor sit amet
                </Text>
              </Grid>
              <Grid width='100%' alignItems='center' justifyContent='right'>
                <CircleButton disabled active={false} onClick={() => null} />
              </Grid>
            </Grid>
          </Section>
          <Section>
            <Text weight={600} size='14px'>
              Impact
            </Text>
            <Text margin='0.4rem 0 0 0'>
              Make use of this features to bring more value flow to your smartNFT and create an impact on the network
            </Text>
            <GridContainer>
              <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 8fr 1fr' alignItems='center'>
                <Grid alignSelf='start' justifySelf='start' marginTop='8px'>
                  <TextBaseIcon width={15} height={15} fill='#8B40F4' />
                </Grid>
                <Grid flexDirection='column' width='100%'>
                  <Text weight={600}>Properties</Text>
                  <Text margin='0'>Text traits that show up as rectangles</Text>
                </Grid>
                <Grid width='100%' alignItems='center' justifyContent='right'>
                  <CircleButton active={isPropertiesActive()} onClick={() => setIsProperties(true)} />
                </Grid>
              </Grid>

              <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 8fr 1fr' alignItems='center'>
                <Grid alignSelf='start' justifySelf='start' marginTop='8px'>
                  <StarIcon width={15} height={15} fill='#8B40F4' />
                </Grid>
                <Grid flexDirection='column' width='100%'>
                  <Text weight={600}>Levels</Text>
                  <Text margin='0'>Numerical trait that show up as a progress bar</Text>
                </Grid>
                <Grid width='100%' alignItems='center' justifyContent='right'>
                  <CircleButton active={isLevelsActive()} onClick={() => setIsLevels(true)} />
                </Grid>
              </Grid>

              <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 8fr 1fr' alignItems='center'>
                <Grid alignSelf='start' justifySelf='start' marginTop='8px'>
                  <VerticalBarsIcon width={15} height={15} fill='#8B40F4' />
                </Grid>
                <Grid flexDirection='column' width='100%'>
                  <Text weight={600}>Stats</Text>
                  <Text margin='0'>Numerical trait that show as numbers</Text>
                </Grid>
                <Grid width='100%' alignItems='center' justifyContent='right'>
                  <CircleButton active={isStatsActive()} onClick={() => setIsStats(true)} />
                </Grid>
              </Grid>

              <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 8fr 1fr' alignItems='start'>
                <Grid alignSelf='start' justifySelf='start' marginTop='8px'>
                  <AlertIcon width={15} height={15} fill='#8B40F4' />
                </Grid>
                <Grid flexDirection='column' width='100%'>
                  <Text weight={600}>NSFW Content</Text>
                  <Text margin='0'>Set this item as explicit and sensitive content (as Not Safe For Work)</Text>
                </Grid>
                <Grid width='100%' justifyContent='center' alignItems='start' marginTop='8px' marginLeft='12px'>
                  <Toggle
                    height='20px'
                    checked={nftConfig.nsfw}
                    leftBackgroundColor='#696969'
                    rightBackgroundColor='#8B40F4'
                    leftBorderColor='#696969'
                    rightBorderColor='#8B40F4'
                    knobColor='#1A1A1A'
                    name='toggle-nsfw'
                    onToggle={e => {
                      setNftConfig({ ...nftConfig, nsfw: (e.target as HTMLInputElement).checked })
                    }}
                  />
                </Grid>
              </Grid>
            </GridContainer>
          </Section>
          <Section>
            <Section>
              <Flex flexDirection='column'>
                <Text weight={600} size='14px'>
                  Creator Earnings
                </Text>
                <Text margin='0.5rem 0 0 0'>
                  Choose a fee when a user re-sells an item your originally created. This is deducted from the final sale price, and paid
                  monthly to a payout address of your choosing.
                </Text>
                <Input
                  type='number'
                  min='0'
                  max='100'
                  placeholder='e.g. 2.5'
                  value={parseFloat(nftConfig.creatorEarnings)}
                  onChange={e => {
                    e.preventDefault()
                    if (parseFloat(e.target.value) >= 0 && parseFloat(e.target.value) <= 100.0) {
                      setNftConfig({ ...nftConfig, creatorEarnings: parseFloat(e.target.value).toFixed(1) })
                    } else {
                      setNftConfig({ ...nftConfig, creatorEarnings: '' })
                    }
                  }}
                />
              </Flex>
            </Section>

            <PaymentTokens nftConfig={nftConfig} setNftConfig={setNftConfig} />

            {nftConfig.fractional && nftConfig.fractional >= 2 && <Whitelist nftConfig={nftConfig} setNftConfig={setNftConfig} />}
          </Section>
          <Section>
            <Grid width='100%' gridTemplateColumns='1fr 8fr 1fr' alignItems='start'>
              <Grid alignSelf='start' justifySelf='start' marginTop='8px'>
                <FreezeMetadata width={15} height={15} fill='#8B40F4' />
              </Grid>
              <Grid width='100%'>
                <Text weight={600}>Freeze metadata</Text>
                <Text margin='0'>
                  Freezing your metadata will allow you to permanently lock and store all of this item's content in decentralized file
                  storage.
                </Text>
              </Grid>
              <Grid width='100%' alignItems='center' justifyContent='right' marginTop='8px'>
                <Toggle
                  height='20px'
                  disabled
                  backgroundColorDisabled='#1A1A1A'
                  checked={nftConfig.freeze_metadata}
                  leftBackgroundColor='#696969'
                  rightBackgroundColor='#8B40F4'
                  leftBorderColor='#696969'
                  rightBorderColor='#8B40F4'
                  knobColor='#1A1A1A'
                  name='toggle-freeze-metadata'
                  onToggle={e => () => null}
                />
              </Grid>
            </Grid>
          </Section>
          <Hr />
          <Flex justifyContent='center' marginBottom='0.5rem'>
            <Button
              style={{ width: '100px', height: '40px', justifyContent: 'center', alignItems: 'center' }}
              onClick={isCreateActive() && status === 0 ? createNFT : () => null}
              variant={isCreateActive() && status === 0 ? 'cta' : 'secondary'}
            >
              {status !== 0 ? <LoadingIcon width='300%' height='300%' /> : getTextStatus[0]}
            </Button>
          </Flex>
          <Box marginBottom='6rem'>
            <p style={{ color: '#696969' }}>{status !== 0 && getTextStatus[status]}</p>
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default CreateSingleNFT
