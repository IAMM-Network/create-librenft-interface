import { Flex } from '../../../../components/Box'
import { Container } from '../../../../components/Layout'
import { Section, Hr, Text } from '../../styles'
import { Button } from '../../../../components/Button'
import { Dispatch, SetStateAction, useState } from 'react'
import { NftMetadata, NftStats } from '../../CreateSingleNFT'
import StatsInput from './Stats/StatsInput'
import StatsList from './Stats/StatsList'

interface StatsProps {
  nftMetadata: NftMetadata
  setNftMetadata: Dispatch<SetStateAction<NftMetadata>>
  setIsStats: Dispatch<SetStateAction<boolean>>
}

const defaultStats: NftStats = {
  trait_type: '',
  value: 3,
  max_value: 5,
  display_type: "number",
}

const Stats = ({ setIsStats, nftMetadata, setNftMetadata }: StatsProps) => {
  const [currentlyStats, setCurrentlyStats] = useState<NftStats>(defaultStats)

  const addStats = () => {
    if (allowAddMore()) {
      setNftMetadata(prevMetadata => ({ ...prevMetadata, stats: [...prevMetadata.stats, currentlyStats] }))
      setCurrentlyStats(defaultStats)
    }
  }

  const removeStats = (i: number) => {
    setNftMetadata(prevMetadata => {
      const newStats = prevMetadata.stats.filter((stat, index) => index !== i)
      return { ...prevMetadata, stats: newStats }
    })
  }

  const editStats = (i: number, key: string, value: string | number) => {
    setNftMetadata(prevMetadata => {
      const newStat = { ...prevMetadata.stats[i], [key]: value }
      prevMetadata.stats[i] = newStat
      const newStats = [...prevMetadata.stats]
      return { ...prevMetadata, stats: newStats }
    })
  }

  const allowAddMore = (): boolean =>
    !!currentlyStats.trait_type && currentlyStats.value >= 0 && Number(currentlyStats.max_value) >= 1 && !!currentlyStats.display_type

  return (
    <Flex width='100vw' height='100vh' background='#1A1A1A' top='0px' left='0px' position='fixed' zIndex={1000}>
      <Container maxWidth='90%'>
        <Flex flexDirection='column' paddingTop='32px'>
          <Text weight={600} size='21px'>
            Add Stats
          </Text>

          <Hr />

          <Section>

            {nftMetadata.stats.length > 0 &&
              nftMetadata.stats.map(({ trait_type, value, max_value }, index) => (
                <StatsList
                  key={`${index}-${trait_type}-${value}-${max_value}`}
                  index={index}
                  trait_type={trait_type}
                  value={value}
                  max_value={Number(max_value)}
                  editStats={editStats}
                  removeStats={removeStats}
                  currentlyStats={currentlyStats}
                  setCurrentlyStats={setCurrentlyStats}
                />
              ))}
            <StatsInput setCurrentlyStats={setCurrentlyStats} currentlyStats={currentlyStats} />
          </Section>

          <Flex margin='2rem 0' justifyContent='center'>
            <Button variant={`${allowAddMore() ? 'primary' : 'secondary'}`} onClick={() => addStats()}>
              ADD MORE
            </Button>
          </Flex>

          <Hr />

          <Flex justifyContent='center' marginBottom='1rem'>
            <Button variant='cta' onClick={() => setIsStats(false)}>
              Save
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}

export default Stats
