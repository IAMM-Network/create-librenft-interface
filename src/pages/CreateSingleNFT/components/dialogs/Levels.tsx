import { Box, Flex } from '../../../../components/Box'
import { Container } from '../../../../components/Layout'
import { Section, Hr, Text } from '../../styles'
import { Button } from '../../../../components/Button'
import { Dispatch, SetStateAction, useState } from 'react'
import { NftLevels, NftMetadata } from '../../CreateSingleNFT'
import LevelInput from './Levels/LevelInput'
import LevelsList from './Levels/LevelsList'
import { CloseIcon } from '../../../../components/Svg'
import ImpactContainer from '../ImpactContainer'

interface OwnershipLockProps {
  nftMetadata: NftMetadata
  setIsLevels: Dispatch<SetStateAction<boolean>>
  setNftMetadata: Dispatch<SetStateAction<NftMetadata>>
  onClose: () => void
}

const defaultLevel: NftLevels = {
  trait_type: '',
  value: 3,
  max_value: 5,
}

const Levels = ({ setIsLevels, nftMetadata, setNftMetadata, onClose }: OwnershipLockProps) => {
  const [currentlyLevels, setCurrentlyLevels] = useState<NftLevels>(defaultLevel)

  const addLevel = () => {
    if (allowAddMore()) {
      setNftMetadata(prevMetadata => ({ ...prevMetadata, levels: [...prevMetadata.levels, currentlyLevels] }))
      setCurrentlyLevels(defaultLevel)
    }
  }

  const removeLevel = (i: number) => {
    setNftMetadata(prevMetadata => {
      const newLevel = prevMetadata.levels.filter((level, index) => index !== i)
      return { ...prevMetadata, levels: newLevel }
    })
  }

  const editLevel = (i: number, key: string, value: string | number) => {
    setNftMetadata(prevMetadata => {
      const newLevel = { ...prevMetadata.levels[i], [key]: value }
      prevMetadata.levels[i] = newLevel
      const newLevels = [...prevMetadata.levels]
      return { ...prevMetadata, levels: newLevels }
    })
  }

  const allowAddMore = (): boolean =>
    currentlyLevels.trait_type.length > 0 && currentlyLevels.value >= 0 && Number(currentlyLevels.max_value) >= 1

  return (
    <Flex width='100vw' height='100vh' background='#1A1A1A' top='0px' left='0px' position='fixed' zIndex={1000} justifyContent='center'>
      <Box overflowY='scroll' paddingBottom='3rem'>
        <ImpactContainer>
          <Flex justifyContent="end" paddingTop="1rem">
            <CloseIcon width={15} onClick={onClose} cursor="pointer" />
          </Flex>
          <Flex flexDirection='column' paddingTop='32px' alignItems="center" marginTop="-1rem">
            <Text weight={600} size='21px'>
              Add Levels
            </Text>

            <Hr />

            <Section>

              {nftMetadata.levels.length > 0 &&
                nftMetadata.levels.map(({ trait_type, value, max_value }, index) => (
                  <LevelsList
                    key={`${index}-${trait_type}-${value}-${max_value}`}
                    index={index}
                    trait_type={trait_type}
                    value={value}
                    max_value={Number(max_value)}
                    editLevel={editLevel}
                    removeLevel={removeLevel}
                    currentlyLevels={currentlyLevels}
                    setCurrentlyLevels={setCurrentlyLevels}
                  />
                ))}
              <LevelInput setCurrentlyLevels={setCurrentlyLevels} currentlyLevels={currentlyLevels} />
            </Section>

            <Flex margin='2rem 0' justifyContent='center'>
              <Button variant={`${allowAddMore() ? 'primary' : 'secondary'}`} onClick={() => addLevel()}>
                ADD MORE
              </Button>
            </Flex>

            <Hr />

            <Flex justifyContent='center' marginBottom='1rem'>
              <Button variant='cta' onClick={() => setIsLevels(false)}>
                Save
              </Button>
            </Flex>
          </Flex>
        </ImpactContainer>
      </Box>
    </Flex>
  )
}

export default Levels
