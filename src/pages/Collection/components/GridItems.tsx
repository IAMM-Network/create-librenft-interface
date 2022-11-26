import { Box, Flex, Grid } from '../../../components/Box'
import { GridItemsCollectionName, GridItemsImage, GridItemsTokenId } from '../styles'

// demo data
const nftTokensIds = [8888, 8889, 9000, 9991, 9992, 9993, 9994, 9995, 9996, 9997, 9998, 9999]

interface ItemProps {
  tokenId: number
}

const Item = ({ tokenId }: ItemProps) => (
  <Box background='#C4C4C4' width="100%" margin='0 auto'>
    {/**TODO IMAGE */}
    <GridItemsImage />
    <Flex style={{textAlign: "left"}} padding="8px 4px" flexDirection="column">
      <GridItemsCollectionName>Collection Name</GridItemsCollectionName>
      <GridItemsTokenId>ID #{tokenId}</GridItemsTokenId>
    </Flex>
  </Box>
)

export const GridItems = () => (
  <Grid gridTemplateColumns='repeat(2, 1fr)' gridRowGap='1rem' gridColumnGap="2rem" width="90%" margin='16px auto'>
    {nftTokensIds.map((tokenId, index) => (
      <Item key={`${index}-${tokenId}`} tokenId={tokenId} />
    ))}
  </Grid>
)

export default GridItems
