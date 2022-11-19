import { Box, Flex } from '../../../components/Box'
import { CKBCircleIcon } from '../../../components/Svg'
import { StatsItem, StatsWrapper, StatsValue } from '../styles'

interface Data {
  items: string
  owners: string
  floorPrice: string
  volume: string
}

const data: Data = {
  items: '8800',
  owners: '8800',
  floorPrice: '8.800',
  volume: '150000',
}

const formatValue = (val: string) => {
  const num = Number(val)
  return Math.abs(num) > 999 ? `${Math.sign(num) * Number((Math.abs(num) / 1000).toFixed(1))} K` : Math.sign(num) * Math.abs(num)
}

const formatFloorPrice = (val: string) => Number(val).toFixed(3)

const Stats = () => (
  <Box width='90%' margin="0 auto">
    <StatsWrapper gridTemplateColumns='repeat(4, 1fr)'>
      <Box borderRight='1px solid #FFFFFF' padding="0px 8px">
        <StatsValue>{formatValue(data.items)}</StatsValue>
        <StatsItem>items</StatsItem>
      </Box>
      <Box borderRight='1px solid #FFFFFF' padding="0px 8px">
        <StatsValue>{formatValue(data.owners)}</StatsValue>
        <StatsItem>owners</StatsItem>
      </Box>
      <Box borderRight='1px solid #FFFFFF' padding="0px 8px">
        <StatsValue>
          <Flex justifyContent='center'>
            <Box marginRight='4px'>
              <CKBCircleIcon width='15px' />
            </Box>
            {formatFloorPrice(data.floorPrice)}
          </Flex>
        </StatsValue>
        <StatsItem>floor price</StatsItem>
      </Box>
      <Box>
        <StatsValue>${formatValue(data.volume)}</StatsValue>
        <StatsItem>volume</StatsItem>
      </Box>
    </StatsWrapper>
  </Box>
)

export default Stats
