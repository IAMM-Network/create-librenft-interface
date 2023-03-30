import { useContext, useEffect, useState } from 'react'
import { Container } from '../../components/Layout'

import styled from 'styled-components'
import { getPostMockData } from '../SocialFeed/data/types'
import Post from './componnt/Post'

const ShowThisThread = () => {
  const mockData = getPostMockData(1)
  return (
    <Container>
      <Post item={mockData[0]} />
    </Container>
  )
}

export default ShowThisThread
