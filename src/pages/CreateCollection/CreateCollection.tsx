import { useState, useEffect } from 'react'
import { Flex } from '../../components/Box'
import { Container } from '../../components/Layout'
import { TitleSection, Text, Section, Input, Preview, TextArea, Select } from './styles'
import { Button } from '../../components/Button'

const HeadPurple = require('../../assets/images/head-purple.png')


const CreateCollection: React.FC = () => {
  const [name, setName] = useState('')
  const [externalLink, setExternalLink] = useState('https://yoursite.io/item/123')

  const [selectedFile, setSelectedFile] = useState(undefined)
  const [preview, setPreview] = useState<string | undefined>(undefined)

  const [description, setDescription] = useState('We suggest a nice and detailed description for your item, but 120 character only.')
  const [supply, setSupply] = useState(0)
  const [mintingStatus, setMintingStatus] = useState(0)

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
    <Container maxWidth='90%' paddingY="1rem">
      <Flex flexDirection='column' paddingTop='104px'>
        <TitleSection>
          <Text weight={600} size='21px'>
            Create a Collection
          </Text>
          <Text>*Required fields</Text>
        </TitleSection>

        <Section justifyContent='left'>
          <Text weight={600} size='14px'>
            Collection Name*
          </Text>
          <Input type='text' placeholder='Item name' value={name} onChange={e => setName(e.target.value)} />
        </Section>

        <Section>
          <Text weight={600} size='14px'>
            Logo Image*
          </Text>
          <Text margin='0.5rem 0 0 0'>File types supported: JPG, PNG, GIF, SVG.</Text>
          <Text margin='0px'>Max Size: 100MB</Text>
          <Input type='file' placeholder='Upload file...' onChange={onSelectedImage} />
        </Section>

        <Section width="100vw">
          <Text weight={600} size='14px'>
            Preview
          </Text>
          <Preview>
            <img alt='head-purple' src={selectedFile ? preview : HeadPurple} width={251} height={186} />
          </Preview>
        </Section>

        <Section>
          <Text weight={600} size='14px'>
            Banner Image
          </Text>
          <Text margin='0.5rem 0 0 0'>File types supported: JPG, PNG, GIF, SVG.</Text>
          <Text margin='0px'>Max Size: 100MB</Text>
          <Input type='file' placeholder='Upload file...' onChange={onSelectedImage} />
        </Section>

        <Section width="100vw">
          <Text weight={600} size='14px'>
            Preview
          </Text>
          <Preview>
            <img alt='head-purple' src={selectedFile ? preview : HeadPurple} width={251} height={186} />
          </Preview>
        </Section>

        <Section>
          <Text weight={600} size='14px'>
            Featured Image
          </Text>
          <Text margin='0.5rem 0 0 0'>File types supported: JPG, PNG, GIF, SVG.</Text>
          <Text margin='0px'>Max Size: 100MB</Text>
          <Input type='file' placeholder='Upload file...' onChange={onSelectedImage} />
        </Section>

        <Section width="100vw">
          <Text weight={600} size='14px'>
            Preview
          </Text>
          <Preview>
            <img alt='head-purple' src={selectedFile ? preview : HeadPurple} width={251} height={186} />
          </Preview>
        </Section>

        <Section>
          <Text weight={600} size='14px'>
            Customized URL
          </Text>
          <Text margin='0.5rem 0 0 0'>Must only contain lowercase letters, numbers and hyphens.</Text>
          <Input type='text' placeholder='External link' value={externalLink} onChange={e => setExternalLink(e.target.value)} />
        </Section>

        <Section>
          <Text weight={600} size='14px'>
            Description
          </Text>
          <Text margin='0.5rem 0 0 0'>
            The description will be included on the item's detail page underneath its image. Markdown syntax is supported.
          </Text>
          <TextArea placeholder='Description' value={description} onChange={e => setDescription(e.target.value)} />
        </Section>

        <Section>
          <Text weight={600} size='14px'>
            Category
          </Text>
          <Text margin='0.5rem 0 0 0'>
            Adding a category will help make your item discoverable at IAMM. We recommend to use what people is already using, but you can
            create any.
          </Text>
          <Select>
            <option>Art</option>
            <option>Gaming</option>
          </Select>
        </Section>

        <Section>
          <Text weight={600} size='14px'>
            Links
          </Text>
          <Input type='text' placeholder='yoursite.org' value={externalLink} onChange={e => setExternalLink(e.target.value)} />
          <Input type='text' placeholder='discord.gg' value={externalLink} onChange={e => setExternalLink(e.target.value)} />
          <Input type='text' placeholder='twitter.com' value={externalLink} onChange={e => setExternalLink(e.target.value)} />
          <Input type='text' placeholder='instagram.com' value={externalLink} onChange={e => setExternalLink(e.target.value)} />
          <Input type='text' placeholder='t.me' value={externalLink} onChange={e => setExternalLink(e.target.value)} />
          <Input type='text' placeholder='medium.com' value={externalLink} onChange={e => setExternalLink(e.target.value)} />
        </Section>

        <Section>
          <Text weight={600} size='14px'>
            Creator Earnings{' '}
          </Text>
          <Text margin='0.5rem 0 0 0'>
            Choose a fee when a user re-sells an item your originally created. This is deducted from the final sale price, and paid monthly
            to a payout address of your choosing.
          </Text>
          <Input type='number' placeholder='eg: 2.5' value={supply} onChange={e => setSupply(parseInt(e.target.value, 10))} />
        </Section>

        <Section>
          <Text weight={600} size='14px'>
            Payment tokens{' '}
          </Text>
          <Text margin='0.5rem 0 0 0'>These tokens can be used to buy and sell your items.</Text>
        </Section>

        <Section>
          <Text weight={600} size='14px'>
            Display theme{' '}
          </Text>
          <Text margin='0.5rem 0 0 0'>Change how your items are shown.</Text>
        </Section>

        <Section>
          <Text weight={600} size='14px'>
            NSFW Content{' '}
          </Text>
          <Text margin='0.5rem 0 0 0'>Set this item as explicit and sensitive content (as Not Safe For Work)</Text>
        </Section>

        <Flex justifyContent='center'>
          <Button onClick={createNFT} variant='cta'>
            {mintingStatus === 0 ? 'Create' : 'Minting...'}
          </Button>
        </Flex>
      </Flex>
    </Container>
  )
}

export default CreateCollection
