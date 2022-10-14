import { useState, useEffect, createElement } from 'react'
import { Flex, Grid } from '../../components/Box'
import { Container } from '../../components/Layout'
import { Button } from '../../components/Button'
import { AlertIcon, OpenEyeIcon, StarIcon, TextBaseIcon, TimelockIcon, VerticalBarsIcon } from '../../components/Svg'
import { Toggle } from 'react-toggle-component'
import { TitleSection, Text, Section, Input, MediaWrapper, Preview, TextArea, Hr } from './styles'
import { mediaOptions } from './Data'
import OwnerShipLock from './components/OwnershipLock/OwnershipLock'
import CircleButton from './components/CircleButton'

const HeadPurple = require('../../assets/images/head-purple.png') 

const CreateSingleNFT = () => {
  const [name, setName] = useState<string>()
  const [mediaSelected, setMediaSelected] = useState<number>(0)
  const [selectedFile, setSelectedFile] = useState(undefined)
  const [preview, setPreview] = useState<string>()
  const [externalLink, setExternalLink] = useState<string>()
  const [description, setDescription] = useState<string>()
  const [supply, setSupply] = useState(0)

  // NFT Smart Settings
  /*
  const [smartNFT, setSmartNFT] = useState({
    multiSignature: false,
    fractional: false,
    qty: 1,
    transferable: false,
    mint: 'creator',
    unlockeableContent: false,
    timeframe: false,
    deadline: false,
    timeline: false,
    composable: false,
    interoperable: false,
    extensible: false,
  });
  */

  /*
  const [nftProperties, setNFTProperties] = useState([
    {
      type: '',
      name: '',
    },
  ]);
  */

  /*
  const [nftLevels, setNFTLevels] = useState([
    {
      name: '',
      value: [1, 6],
    },
  ]);
  */

  const [mintingStatus, setMintingStatus] = useState<number>(0)

  const onSelectedImage = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    setSelectedFile(e.target.files[0])
  }

  const createNFT = () => {
    return setMintingStatus(1)
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
    <Container maxWidth='90%'>
      <Flex flexDirection='column' paddingTop='104px'>
        <TitleSection>
          <Text weight={600} size='21px'>
            Create smartNFT
          </Text>
          <Text>*Required fields</Text>
        </TitleSection>

        <Section justifyContent='left'>
          <Text weight={600} size='14px'>
            Display name*
          </Text>
          <Input type='text' placeholder='Item name' value={name} onChange={e => setName(e.target.value)} />
        </Section>

        <Section>
          <Text weight={600} size='14px'>
            File type*
          </Text>

          <Grid gridTemplateColumns='1fr 1fr' gridTemplateRows='auto' gridGap='1rem' width='100%'>
            {mediaOptions.map((e, index) => (
              <MediaWrapper active={index === mediaSelected} onClick={() => setMediaSelected(index)}>
                <Grid>
                  {createElement(e.icon, {
                    fill: index === mediaSelected ? 'white' : '#696969',
                    width: 70,
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
            Upload fileitem
          </Text>
          <Text margin='0.5rem 0 0 0'>File types supported: JPG, PNG, GIF, SVG.</Text>
          <Text margin='0px'>Max Size: 100MB</Text>
          <Input type='file' placeholder='Upload file...' onChange={onSelectedImage} />
        </Section>

        <Section>
          <Text weight={600} size='14px'>
            Preview
          </Text>
          <Preview>
            <img alt='head-purple' src={selectedFile ? preview : HeadPurple} width={251} />
          </Preview>
        </Section>

        <Section>
          <Text weight={600} size='14px'>
            External link
          </Text>
          <Text margin='0.5rem 0 0 0'>
            IAMM will add a link to this URL on this item's detail page, so that others can click to learn more about it. You are welcome to
            link to your own site with more details.
          </Text>
          <Input
            type='text'
            placeholder='https://yoursite.io/item/123'
            value={externalLink}
            onChange={e => setExternalLink(e.target.value)}
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
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </Section>

        <Section>
          <Text weight={600} size='14px'>
            How smart
          </Text>
          <Text margin='0.5rem 0 0 0'>Select the predefined smartPlugins</Text>

          <OwnerShipLock />

          <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 2fr 1fr' alignItems='center'>
            <Grid alignSelf='center'>
              <TimelockIcon fill='#8B40F4' />
            </Grid>
            <Grid flexDirection='column' width='100%'>
              <Text weight={600}>Timelock</Text>
              <Text margin='0'>Lorem ipsum dolor sit amet</Text>
            </Grid>
            <Grid width='100%' alignItems='center' justifyContent='right'>
              <CircleButton active={false} onClick={() => alert('Timelock')} />
            </Grid>
          </Grid>

          <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 2fr 1fr' alignItems='center'>
            <Grid alignSelf='center'>
              <OpenEyeIcon fill='#8B40F4' />
            </Grid>
            <Grid flexDirection='column' width='100%'>
              <Text weight={600}>Generative</Text>
              <Text margin='0'>Lorem ipsum dolor sit amet</Text>
            </Grid>
            <Grid width='100%' alignItems='center' justifyContent='right'>
              <CircleButton active={true} onClick={() => alert('Generative')} />
            </Grid>
          </Grid>
        </Section>

        <Section>
          <Text weight={600} size='14px'>
            Impact
          </Text>
          <Text margin='0.5rem 0 0 0'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>

          <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 2fr 1fr' alignItems='center'>
            <Grid alignSelf='center'>
              <TextBaseIcon fill='#8B40F4' />
            </Grid>
            <Grid flexDirection='column' width='100%'>
              <Text weight={600}>Properties</Text>
              <Text margin='0'>Text traits that show up as rectangles</Text>
            </Grid>
            <Grid width='100%' alignItems='center' justifyContent='right'>
              <CircleButton active={true} onClick={() => alert('Properties')} />
            </Grid>
          </Grid>

          <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 2fr 1fr' alignItems='center'>
            <Grid alignSelf='center'>
              <StarIcon fill='#8B40F4' />
            </Grid>
            <Grid flexDirection='column' width='100%'>
              <Text weight={600}>Levels</Text>
              <Text margin='0'>Numerical trait that show up as a progress bar</Text>
            </Grid>
            <Grid width='100%' alignItems='center' justifyContent='right'>
              <CircleButton active={false} onClick={() => alert('Levels')} />
            </Grid>
          </Grid>

          <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 2fr 1fr' alignItems='center'>
            <Grid alignSelf='center'>
              <VerticalBarsIcon fill='#8B40F4' />
            </Grid>
            <Grid flexDirection='column' width='100%'>
              <Text weight={600}>Stats</Text>
              <Text margin='0'>Numerical trait that show as numbers</Text>
            </Grid>
            <Grid width='100%' alignItems='center' justifyContent='right'>
              <CircleButton active={true} onClick={() => alert('Stats')} />
            </Grid>
          </Grid>

          <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 2fr 1fr' alignItems='center'>
            <Grid alignSelf='center'>
              <AlertIcon fill='#8B40F4' />
            </Grid>
            <Grid flexDirection='column' width='100%'>
              <Text weight={600}>NSFW Content</Text>
              <Text margin='0'>Set this item as explicit and sensitive content (as Not Safe For Work)</Text>
            </Grid>
            <Grid width='100%' alignItems='center' justifyContent='right'>
              <Toggle
                leftBackgroundColor='#696969'
                rightBackgroundColor='#8B40F4'
                leftBorderColor='#696969'
                rightBorderColor='#8B40F4'
                knobColor='#1A1A1A'
                name='toggle-nsfw'
                onToggle={e => console.log('onToggle', (e.target as HTMLInputElement).checked)}
              />
            </Grid>
          </Grid>
        </Section>

        <Section>
          <Text weight={600} size='14px'>
            Supply
          </Text>
          <Text margin='0.5rem 0 0 0'>The number of items that can be minted.</Text>
          <Input type='number' placeholder='#' value={supply} onChange={e => setSupply(parseInt(e.target.value, 10))} />
        </Section>

        <Hr />

        <Flex justifyContent='center' marginBottom='6rem'>
          <Button onClick={createNFT} variant='cta'>
            {mintingStatus === 0 ? 'Create' : 'Minting...'}
          </Button>
        </Flex>
      </Flex>
    </Container>
  )
}

export default CreateSingleNFT
