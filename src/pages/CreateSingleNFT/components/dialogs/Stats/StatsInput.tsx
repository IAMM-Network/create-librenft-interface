import { Flex, Box, Grid } from '../../../../../components/Box'
import { Dispatch, SetStateAction } from 'react'
import { NftStats } from '../../../CreateSingleNFT'
import { Text, Input } from '../../../styles'

interface StatsInputProps {
  setCurrentlyStats: Dispatch<SetStateAction<NftStats>>
  currentlyStats: NftStats
}

const StatsInput = ({ setCurrentlyStats, currentlyStats }: StatsInputProps) => (
  <Box position='relative' marginTop='1rem'>
    <Box>
      <Text>Name</Text>
      <Input
        width={100}
        value={currentlyStats.trait_type}
        type='text'
        placeholder='Speed'
        onChange={e => setCurrentlyStats({ ...currentlyStats, trait_type: e.target.value })}
      />
    </Box>
    <Box>
      <Text>Value</Text>
      <Flex>
        <Input
          value={currentlyStats.value}
          type='number'
          onChange={({ target }) => Number(target.value) >= 0 && setCurrentlyStats({ ...currentlyStats, value: target.value })}
        />
        <Grid padding='.5rem' alignItems='center' justifyContent='center'>
          <Text>of</Text>
        </Grid>
        <Input
          value={currentlyStats.max_value}
          type='number'
          onChange={({ target }) => Number(target.value) > 0 && setCurrentlyStats({ ...currentlyStats, max_value: Number(target.value) })}
        />
      </Flex>
    </Box>
  </Box>
)

export default StatsInput
