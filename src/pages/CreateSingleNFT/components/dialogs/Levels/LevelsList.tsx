import { Box, Flex, Grid } from '../../../../../components/Box'
import { Dispatch, SetStateAction } from 'react'
import { NftProperties } from '../../../CreateSingleNFT'
import { Text, Input } from '../../../styles'

interface LevelsListProps {
  index: number
  trait_type: string
  value: string | number
  max_value: number
  removeLevel: (index: number) => void
  editLevel: (i: number, key: string, value: string | number) => void
  currentlyLevels: NftProperties
  setCurrentlyLevels: Dispatch<SetStateAction<NftProperties>>
}

const LevelsList = ({
  index,
  trait_type,
  value,
  max_value,
  removeLevel,
  editLevel,
  currentlyLevels,
  setCurrentlyLevels,
}: LevelsListProps) => (
  <Box position='relative' marginTop='1.3rem'>
    <button
      onClick={() => removeLevel(index)}
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
        onChange={({ target }) => editLevel(index, "trait_type", target.value)}
      />
    </Box>
    <Box>
      <Text>Value</Text>
      <Flex>
        <Input
          value={value}
          type='number'
          onChange={({ target }) => Number(target.value) >= 0 && editLevel(index, "value", Number(target.value))}
        />
        <Grid padding='.5rem' alignItems='center' justifyContent='center'>
          <Text>of</Text>
        </Grid>
        <Input
          value={max_value}
          type='number'
          onChange={({ target }) => Number(target.value) > 0 && editLevel(index, "max_value", Number(target.value))}
        />
      </Flex>
    </Box>
  </Box>
)

export default LevelsList
