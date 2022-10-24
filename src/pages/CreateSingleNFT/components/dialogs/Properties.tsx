import { Flex, Box } from '../../../../components/Box'
import { Container } from '../../../../components/Layout'
import { Section, Hr, Text, Input } from '../../styles'
import { Button } from '../../../../components/Button'
import { Dispatch, SetStateAction, useState } from 'react'
import { NftMetadata, NftProperties } from '../../CreateSingleNFT'

interface OwnershipLockProps {
  nftMetadata: NftMetadata
  setIsOwnershipLock: Dispatch<SetStateAction<boolean>>
  setNftMetadata: Dispatch<SetStateAction<NftMetadata>>
}

const defaultProperty: NftProperties = {
  trait_type: '',
  value: '',
}

const Properties = ({ setIsOwnershipLock, nftMetadata, setNftMetadata }: OwnershipLockProps) => {
  const [currentProperty, setCurrentProperty] = useState<NftProperties>(defaultProperty)

  const addProperty = () => {
    if (allowAddMore()) {
      setNftMetadata(prevMetadata => ({ ...prevMetadata, properties: [...prevMetadata.properties, currentProperty] }))
      setCurrentProperty(defaultProperty)
    }
  }

  const allowAddMore = (): boolean => currentProperty.trait_type.length > 0 && currentProperty.value.length > 0

  const removeProperty = (i: number) => {
    setNftMetadata(prevMetadata => {
      const newProperties = prevMetadata.properties.filter((property, index) => index !== i)
      return { ...prevMetadata, properties: newProperties }
    })
  }

  const editProperty = (i: number, key: string, value: string) => {
    setNftMetadata(prevMetadata => {
      const newProperty = { ...prevMetadata.properties[i], [key]: value }
      prevMetadata.properties[i] = newProperty
      const newProperties = [...prevMetadata.properties]
      return { ...prevMetadata, properties: newProperties }
    })
  }

  return (
    <Flex width='100vw' height='100vh' background='#1A1A1A' top='0px' left='0px' position='fixed' overflow='auto'>
      <Container maxWidth='90%'>
        <Flex flexDirection='column' paddingTop='32px'>
          <Text weight={600} size='21px'>
            Add Properties
          </Text>

          <Hr />

          <Section>
            {nftMetadata.properties &&
              nftMetadata.properties.length > 0 &&
              nftMetadata.properties.map(({ trait_type, value }, index) => (
                <Flex key={`${index}-${trait_type}-${value}`} position='relative' flexDirection='row' marginTop='1rem'>
                  <button
                    onClick={() => removeProperty(index)}
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      background: 'none',
                      border: 'none',
                      color: 'white',
                      fontSize: '1rem',
                      fontWeight: 'lighter',
                      cursor: 'pointer',
                    }}
                  >
                    x
                  </button>
                  <Box marginRight='.3rem'>
                    <Text>Type</Text>
                    <Flex flexDirection='row'>
                      <Input
                        value={trait_type}
                        type='text'
                        placeholder='Character'
                        onChange={e => editProperty(index, 'trait_type', e.target.value)}
                      />
                    </Flex>
                  </Box>
                  <Box>
                    <Text>Name</Text>
                    <Flex flexDirection='column'>
                      <Input value={value} type='text' placeholder='Male' onChange={e => editProperty(index, 'value', e.target.value)} />
                    </Flex>
                  </Box>
                </Flex>
              ))}

            <Flex position='relative' flexDirection='row' marginTop='1rem'>
              <Box marginRight='.3rem'>
                <Text>Type</Text>
                <Flex flexDirection='row'>
                  <Input
                    value={currentProperty.trait_type}
                    type='text'
                    placeholder='Character'
                    onChange={e => setCurrentProperty({ ...currentProperty, trait_type: e.target.value })}
                  />
                </Flex>
              </Box>
              <Box>
                <Text>Name</Text>
                <Flex flexDirection='column'>
                  <Input
                    value={currentProperty.value}
                    type='text'
                    placeholder='Male'
                    onChange={e => setCurrentProperty({ ...currentProperty, value: e.target.value })}
                  />
                </Flex>
              </Box>
            </Flex>
          </Section>

          <Flex margin='2rem 0' justifyContent='center'>
            <Button variant={`${allowAddMore() ? 'primary' : 'secondary'}`} onClick={() => addProperty()}>
              ADD MORE
            </Button>
          </Flex>

          <Hr />

          <Flex justifyContent='center' marginBottom='1rem'>
            <Button variant='cta' onClick={() => setIsOwnershipLock(false)}>
              Save
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}

export default Properties
