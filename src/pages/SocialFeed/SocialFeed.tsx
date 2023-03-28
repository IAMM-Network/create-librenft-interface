import { useContext, useEffect, useState } from 'react'
import { Container } from '../../components/Layout'
import { Context as UserProfile } from '../../contexts/UserProfile'
import Menu from '../Profile/components/Menu'
import InfiniteScroll from 'react-infinite-scroll-component'
import { LoadingIcon } from '../../components/Svg'
import { getPostMockData, PostProps } from './data/types'
import Post from './components/Post'
import styled from 'styled-components'
import FloatingButton from './components/FloatingButton'

// for mobile testing
const MenuWrapper = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 1rem 0;
  max-width: 540px;
  left: 50%;
  transform: translateX(-50%);
`

const SocialFeed = () => {
  const POST_LIMIT = 10
  const [offset, setOffset] = useState<number>(POST_LIMIT)
  const { isConnected, isCollector } = useContext(UserProfile)
  const mockData = getPostMockData(POST_LIMIT)
  const [count, setCount] = useState<number>(100) // total post count
  const [items, setItems] = useState<any>(mockData) // post count in the current feed
  const [openFloatingButton, setOpenFloatingButton] = useState<boolean>(false)

  const fetchMoreData = () => {
    setOffset(prev => prev + POST_LIMIT)
  }

  useEffect(() => {
    const newItems = getPostMockData(POST_LIMIT)
    setItems((prev: any) => [...prev, ...newItems])
    setCount(prev => prev + POST_LIMIT)
  }, [offset])

  useEffect(() => {
    return () => {
      setItems([])
      setCount(0)
    }
  }, [setCount, setItems])

  return (
    <>
      <Container>
        <InfiniteScroll
          height={'calc(100vh - 110px)'}
          dataLength={items?.length}
          hasMore={items?.length < count}
          next={fetchMoreData}
          style={openFloatingButton ? { filter: 'blur(4px)' } : undefined}
          loader={<LoadingIcon width='100px' height='100px' />}
        >
          {items?.length ? (
            items?.map((item: PostProps, index: number) => {
              return <Post item={item} key={`post-${index}`} />
            })
          ) : (
            <LoadingIcon width='100px' height='100px' />
          )}
        </InfiniteScroll>
      </Container>
      <Menu />
      <FloatingButton open={openFloatingButton} setOpen={setOpenFloatingButton} isConnected={isConnected} isCollector={isCollector} />
    </>
  )
}

export default SocialFeed
