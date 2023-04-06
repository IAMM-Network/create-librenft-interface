import { Container } from '../../components/Layout'
import { getPostMockData } from '../SocialFeed/data/types'
import Post from './component/Post'

const SharePost = () => {
  const mockData = getPostMockData(1)

  return (
    <Container style={{ marginTop: '80px' }}>
      <Post item={mockData[0]} />
    </Container>
  )
}

export default SharePost
