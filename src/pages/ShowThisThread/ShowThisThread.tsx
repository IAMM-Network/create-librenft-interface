import { useState } from 'react'
import { Container } from '../../components/Layout'
import { getPostMockData } from '../SocialFeed/data/types'
import Post from './componnt/Post'
import Thread from './componnt/Thread'

const ShowThisThread = () => {
  const mockData = getPostMockData(1)
  const [threadItems, setThreadItems] = useState<any>([{ ...mockData[0] }])
  return (
    <>
      <Container>
        <Post item={mockData[0]} />
      </Container>
      {threadItems.map((item: any) => (
        <Thread item={item} />
      ))}
    </>
  )
}

export default ShowThisThread
