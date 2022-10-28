import { Box, Flex, Grid } from '../../../../../components/Box'
import { Dispatch, SetStateAction } from 'react'
import { NftStats } from '../../../CreateSingleNFT'
import { Text, Input } from '../../../styles'

interface StatsListProps {
  index: number
  trait_type: string
  value: string | number
  max_value: number
  removeStats: (index: number) => void
  editStats: (i: number, key: string, value: string | number) => void
  currentlyStats: NftStats
  setCurrentlyStats: Dispatch<SetStateAction<NftStats>>
}

const StatsList = ({
  index,
  trait_type,
  value,
  max_value,
  removeStats,
  editStats,
  currentlyStats,
  setCurrentlyStats,
}: StatsListProps) => (
  <Box position='relative' marginTop='1.3rem'>
    <button
      onClick={() => removeStats(index)}
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
    <Box>
      <Text>Name</Text>
      <Input
        width={100}
        value={trait_type}
        type='text'
        onChange={({ target }) => editStats(index, "trait_type", target.value)}
      />
    </Box>
    <Box>
      <Text>Value</Text>
      <Flex>
        <Input
          value={value}
          type='number'
          onChange={({ target }) => Number(target.value) >= 0 && editStats(index, "value", Number(target.value))}
        />
        <Grid padding='.5rem' alignItems='center' justifyContent='center'>
          <Text>of</Text>
        </Grid>
        <Input
          value={max_value}
          type='number'
          onChange={({ target }) => Number(target.value) > 0 && editStats(index, "max_value", Number(target.value))}
        />
      </Flex>
    </Box>
  </Box>
)

export default StatsList
