import { Box, Flex } from '../../../components/Box'
import { CollectionCreator, CollectionTitle, CollectionDescription, LevelImg } from '../styles'

const medals = require('../../../assets/images/collections/iamm/medals.png')

interface CoverProps {
  collectionName: string
}

const data = {
  creator: 'Lorem impsum',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
}

const Description = ({ collectionName }: CoverProps) => (
  <Flex paddingTop='88px' width='100%' paddingBottom='16px'>
    <Flex flexDirection='column'>
      <Box>
        <CollectionTitle>{collectionName}</CollectionTitle>
      </Box>
      <Box marginY='4px'>
        <CollectionCreator>
          Created by: <strong>{data.creator}</strong>
        </CollectionCreator>
      </Box>
      <Box>
        <LevelImg src={medals} alt='medals' />
      </Box>
      <Box marginY='8px' maxWidth='90%' margin='0px auto'>
        <CollectionDescription>{data.description}</CollectionDescription>
      </Box>
    </Flex>
  </Flex>
)

export default Description
