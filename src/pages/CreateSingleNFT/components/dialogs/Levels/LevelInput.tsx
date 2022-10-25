import { Flex, Box, Grid } from '../../../../../components/Box'
import { Dispatch, SetStateAction } from 'react'
import { NftLevels } from '../../../CreateSingleNFT'
import { Text, Input } from '../../../styles'

interface LevelInputProps {
  setCurrentlyLevels: Dispatch<SetStateAction<NftLevels>>
  currentlyLevels: NftLevels
}

const LevelInput = ({ setCurrentlyLevels, currentlyLevels }: LevelInputProps) => (
  <Box position='relative' marginTop='1rem'>
    <Box>
      <Text>Name</Text>
      <Input
        width={100}
        value={currentlyLevels.trait_type}
        type='text'
        placeholder='Speed'
        onChange={e => setCurrentlyLevels({ ...currentlyLevels, trait_type: e.target.value })}
      />
    </Box>
    <Box>
      <Text>Value</Text>
      <Flex>
        <Input
          value={currentlyLevels.value}
          type='number'
          onChange={({ target }) => Number(target.value) >= 0 && setCurrentlyLevels({ ...currentlyLevels, value: target.value })}
        />
        <Grid padding='.5rem' alignItems='center' justifyContent='center'>
          <Text>of</Text>
        </Grid>
        <Input
          value={currentlyLevels.max_value}
          type='number'
          onChange={({ target }) => Number(target.value) > 0 && setCurrentlyLevels({ ...currentlyLevels, max_value: Number(target.value) })}
        />
      </Flex>
    </Box>
  </Box>
)

export default LevelInput
