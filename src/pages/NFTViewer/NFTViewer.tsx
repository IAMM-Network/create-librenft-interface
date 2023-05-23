import { useState, useEffect, useContext } from 'react'
import { Flex, Grid } from '../../components/Box'
import { Container } from '../../components/Layout'
import { 
  ThreeDotsVerticalIcon,
  HeartIcon,
  NervosIcon, } from '../../components/Svg'
import Menu from '../Profile/components/Menu'
import { randomIntFromInterval } from '../SocialFeed/data/types'
import Accordion from './components/Accordion'
import BottomMenu from './components/BottomMenu'
import { Context as UserProfile } from '../../contexts/UserProfile'
import NFTABI from '../../data/LibreNFT721.json'
import NFTService from '../../services/NFTService'
import styled from 'styled-components'
import { Toggle } from 'react-toggle-component'

import { AcceptOfferButton, Like, LikeCount, NFTTitle, NFTViewerTitle, NFTViewerTitleButton, Offer, Overlay, Text } from './styles'
import { CircleCheckIcon, FractionalIcon, RentableIcon, TransferableIcon } from '../../components/Svg'
import Checkbox from '../../components/Checkbox/Checkbox'
import { WhoPaysTheMint } from '../../data/nftConfig'

const ethers = require('ethers')

const TempImage = require('../../assets/images/congrats-img.png')

export type modalMode = 'buyer' | 'owner' | 'putOnSale' | 'acceptOffer' | 'transfer' | 'cancelSale'

const NFTViewer = ({ name, contract, imageCid, mode }: { name: string; contract: string; imageCid: string, mode: 'buyer' | 'owner' }) => {
  const [modalMode, setModalMode] = useState<modalMode>(mode)
  const { isConnected, userAddress, contractAddress } = useContext(UserProfile)
  const [price, setPrice] = useState(0)
  const [paymentToken, setPaymentToken] = useState('pCKB')
  const [putOnSaleDisabled, setPutOnSaleDisabled] = useState(false)
  const [transferDisabled, setTransferDisabled] = useState(false)

  const [transferable, setTransferable] = useState(false)
  const [isFractional, setIsFractional] = useState(false)
  const [rentable, setRentable] = useState(false)


  const handleOverlay = () => {
    setModalMode(mode)
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum)

  useEffect(() => {
    const getProps = async () => {
      const props = await NFTService.getTokenProps(contractAddress, NFTABI.abi, provider, 1) //TODO: Get token ID 
      console.log(props)
      let _tokenPrice = props?._tokenPrice? Number(props._tokenPrice/10**18) : 0
      setPrice(_tokenPrice)
      sessionStorage.setItem('tokenPrice', String(_tokenPrice)) 
      console.log(`Token price: ${_tokenPrice}`) 
      props?._paymentToken ? setPaymentToken('pCKB') : setPaymentToken('custom')    
      let _isOnSale = props?._isOnSale
      setTransferable(props?._isTransferable)
      props?._fractionalTotalSupply > 1 ? setIsFractional(true) : setIsFractional(false)
      setRentable(props?._rentable)

      const contractOwner = await NFTService.getContractOwner(contractAddress, NFTABI.abi, provider)
      console.log(`Contract Owner: ${contractOwner.toLowerCase()} | user Address: ${userAddress.toLowerCase()}`)
      if(userAddress.toLowerCase() !== contractOwner.toLowerCase()) {
        setPutOnSaleDisabled(false)
      } else {
        try {
          //Check if the contract owner is the token owner
          const tokenOwner = await NFTService.getTokenOwner(contractAddress, NFTABI.abi, provider, 1) //TODO: Get token ID 
          console.log(`Token Owner: ${tokenOwner}`)
          if(userAddress.toLowerCase() !== tokenOwner?.toLowerCase() && tokenOwner?.toLowerCase() !== '0x0000000000000000000000000000000000000000'){
            setPutOnSaleDisabled(true)
            setTransferDisabled(true)
            console.log('Put on sale & transfer disabled')
          }
          else {
            setPutOnSaleDisabled(false)
            if(!_isOnSale)
              setTransferDisabled(true)
            else
              setTransferDisabled(false)
          }
        }catch(error) {
          setPutOnSaleDisabled(false)
        }

      }
    }
    if (isConnected) getProps()
  }, [isConnected, contractAddress, provider, userAddress])

  return (
    <>
      <Container>
        <Flex flexDirection='column' alignContent='center' paddingTop='104px' paddingBottom="100px">
          <Flex marginBottom="40px" flexDirection='row' alignContent='center' alignItems='center' justifyContent='space-between'>
              <NFTViewerTitle>Libre NFT Viewer</NFTViewerTitle>
              <NFTViewerTitleButton>
                <ThreeDotsVerticalIcon fill='transparent' width='20px' height='20px' />
              </NFTViewerTitleButton>
          </Flex>

          <Flex marginBottom="20px" flexDirection='row' alignContent='center' alignItems='center' justifyContent='space-between'>
              {/* <NFTTitle>libre NFT #{randomIntFromInterval(0, 10000)}</NFTTitle> */}
              <NFTTitle>{JSON.parse(sessionStorage.getItem('contractMetadata')??'')?.name}</NFTTitle> 
              <Like>
                <HeartIcon fill='transparent' width='14px' height='14px' />
                <LikeCount>{randomIntFromInterval(50, 100)}</LikeCount>
              </Like>
          </Flex>
          
          <img src={JSON.parse(sessionStorage.getItem('contractMetadata')??'')?.image_url} alt='nft-asset' style={{height:320,width:320,alignSelf:'center'}} />

          <Flex margin="20px" flexDirection='row' alignContent='center' alignItems='center' justifyContent='center'>
            <Text weight={400} size='14px' style={{ marginRight: '10px' }}>
              owned by
            </Text>
            <Text weight={700} size='14px'>
              {mode === 'buyer' ? 'Lorem Ipsum' :  'God woken'}
            </Text>
          </Flex>

          <Flex margin="20px 0" flexDirection='column' style={{ gap: '10px' }}>
            <Offer>
              <Flex flexDirection='column'>
                <Text style={{ textAlign: 'left' }}>Token Price</Text>
                <Flex>
                    <NervosIcon width='15px' height='15px'/>
                    <Flex alignItems={'baseline'}>
                      <Text style={{  marginRight: '3px', marginLeft: '5px' }} weight={600} size='21px'>{price}</Text>
                      <Text weight={400} size='12px'>({paymentToken})</Text>
                    </Flex>
                  </Flex>
              </Flex>
              <AcceptOfferButton disabled={true} onClick={() => setModalMode(mode === 'buyer' ? 'buyer' : 'acceptOffer')}>{mode === 'buyer' ? 'MAKE OFFER' :  'ACCEPT OFFER'}</AcceptOfferButton>
            </Offer>
            <Accordion title="Description">
              {JSON.parse(sessionStorage.getItem('contractMetadata')??'')?.description}
            </Accordion>

            <Accordion title="Ownership Locks">
              <Section>
                <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 8fr 3fr' alignItems='start'>
                  <Grid alignSelf='start' justifySelf='start'>
                    <RentableIcon width={15} fill='#8B40F4' />
                  </Grid>
                  <Grid flexDirection='column' width='100%'>
                    <Text margin='0px' weight={600}>
                      Rentable
                    </Text>
                    <Text margin='0'>
                      This function will let you set up an specific rent time & date, allowing another user to utilize your NFT.
                    </Text>
                  </Grid>
                  <Grid width='100%' alignItems='center' justifyContent='right'>
                    <Toggle
                      height='20px'
                      checked={rentable}
                      leftBackgroundColor='#696969'
                      rightBackgroundColor='#8B40F4'
                      leftBorderColor='#696969'
                      rightBorderColor='#8B40F4'
                      knobColor='#1A1A1A'
                      name='toggle-rentable'
                    />
                  </Grid>
                </Grid>

                <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 8fr 3fr' alignItems='start'>
                  <Grid alignSelf='start' justifySelf='start'>
                    <FractionalIcon width={15} fill='#8B40F4' />
                  </Grid>
                  <Grid flexDirection='column' width='100%'>
                    <Text margin='0px' weight={600}>
                      Fractional
                    </Text>
                    <Text margin='0'>Allow your single NFT to be divided and collected in a specific number of fractions.</Text>
                  </Grid>
                  <Grid width='100%' alignItems='center' justifyContent='right'>
                    <Toggle
                      height='20px'
                      checked={isFractional}
                      leftBackgroundColor='#696969'
                      rightBackgroundColor='#8B40F4'
                      leftBorderColor='#696969'
                      rightBorderColor='#8B40F4'
                      knobColor='#1A1A1A'
                      name='toggle-isfractional'
                    />
                  </Grid>
                </Grid>

                <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 8fr 3fr' alignItems='start'>
                  <Grid alignSelf='start' justifySelf='start'>
                    <TransferableIcon width={15} fill='#8B40F4' />
                  </Grid>
                  <Grid flexDirection='column' width='100%'>
                    <Text margin='0px' weight={600}>
                      Transferable
                    </Text>
                    <Text margin='0'>
                      Enable your NFT to be transferable, if not enable NFT wont be transferable after minting to owner/buyer.
                    </Text>
                  </Grid>
                  <Grid width='100%' alignItems='center' justifyContent='right'>
                    <Toggle
                      height='20px'
                      checked={transferable}
                      leftBackgroundColor='#696969'
                      rightBackgroundColor='#8B40F4'
                      leftBorderColor='#696969'
                      rightBorderColor='#8B40F4'
                      knobColor='#1A1A1A'
                      name='toggle-transferable'
                    />
                  </Grid>
                </Grid>

                <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 8fr 3fr' alignItems='start'>
                  <Grid alignSelf='start' justifySelf='start'>
                    <CircleCheckIcon width={15} fill='#8B40F4' />
                  </Grid>
                  <Grid flexDirection='column' width='100%'>
                    <Text margin='0px' weight={600}>
                      Who pays the mint
                    </Text>
                    <Text margin='0'>Choose who is paying for the NFT minting transaction fee/cost.</Text>
                  </Grid>
                  <Grid width='100%' alignItems='start' justifyContent='end' marginTop='-12px'>
                    <Checkbox payers={WhoPaysTheMint} disabled={[1]} />
                  </Grid>
                </Grid>
              </Section>
            </Accordion>

            <Accordion title="Offers">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </Accordion>

            <Accordion title="Traits">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </Accordion>

            <Accordion title="Unlockable content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </Accordion>

            <Accordion title="Details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </Accordion>

            <Accordion title="Activity">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </Accordion>

            <Accordion title="More of [Collection]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </Accordion>
          </Flex>
          
        </Flex>
      </Container>
      <Menu />
      <BottomMenu mode={modalMode} setModalMode={setModalMode} posDisabled={putOnSaleDisabled} transferDisabled={transferDisabled} setTransferDisabled={setTransferDisabled}/>
      {(modalMode === 'transfer' || modalMode === 'putOnSale') && <Overlay onClick={handleOverlay}/>}
    </>
  )
}

NFTViewer.defaultProps = {
  name: 'libreNFT',
  contract: '0x387443f120e966f0455f15653dc3eddf64579bac',
  imageCid: 'QmRGpxUkGGB2fdxpTjhzzxMV8YKHkQ2oC98iH7egMTyA5D',
}

export default NFTViewer

 const Section = styled(Flex)`
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`
