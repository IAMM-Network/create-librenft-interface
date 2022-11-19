import { Flex } from '../../../components/Box'
import { CoverContainer, CoverPicture, ProfilePicture } from '../styles'

const CollectionCover = require('../../../assets/images/collections/iamm/collection_cover.png')
const CollectionProfile = require('../../../assets/images/collections/iamm/iamm_collection_profile.png')

interface CoverProps {
  collectionName: string
}

const Cover = ({ collectionName }: CoverProps) => (
  <CoverContainer>
    <Flex>
      <CoverPicture src={CollectionCover} alt={`${collectionName}-collection-cover`} />
    </Flex>
    <Flex justifyContent='center' position='absolute' top='50%' width='100%'>
      <ProfilePicture src={CollectionProfile} alt={`${collectionName}-collection-profile`} />
    </Flex>
  </CoverContainer>
)

export default Cover
