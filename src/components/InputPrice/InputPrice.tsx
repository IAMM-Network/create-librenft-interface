import { Box, Flex, Grid } from '../Box'
import { TriangleIcon } from '../Svg'
import { CoinText, InputValue } from './style'

interface InputPriceProps {
    topDisabled: boolean
    bottomDisabled: boolean
}

const InputPrice: React.FC<InputPriceProps> = ({
    topDisabled,
    bottomDisabled,
}) => {
  return (
    <Flex width='100%' marginTop='0.5rem'>
      <Grid border='1px solid #8b40f4' borderRadius='8px' width='100%' gridTemplateColumns='3fr 5fr' justifyContent='space-between'>
        <Flex borderRight='1px solid #8b40f4' padding='1rem 2rem'>
          <Flex flexDirection="column" marginRight="1rem">
            <TriangleIcon fill={topDisabled ? "#696969" : "#8B40F4"} cursor={topDisabled ? "not-allowed" : "pointer"} width={10} marginBottom="3px" />
            <TriangleIcon fill={bottomDisabled ? "#696969" : "#8B40F4"} cursor={bottomDisabled ? "not-allowed" : "pointer"} transform='rotate(180)' width={10} marginTop="3px" />
          </Flex>
          <Box>
            <CoinText>USDC</CoinText>
          </Box>
        </Flex>
        <Flex padding='1rem 2rem'>
            <InputValue type="number" min="0" />
        </Flex>
      </Grid>
    </Flex>
  )
}

export default InputPrice
