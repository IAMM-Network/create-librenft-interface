import styled from 'styled-components'
import { Box } from '../../Box'

export const HeaderWrapper = styled(Box)<{ main?: boolean; isFeed: boolean }>`
  align-items: center;
  background-color: ${({ main, isFeed }) => (main ? '#8B40F4' : isFeed ? '#180a33' : '#1A1A1A')};
  display: flex;
  height: ${({ isFeed }) => (isFeed ? '60px' : '80px')};
  position: fixed;
  width: 100vw;
  z-index: 100;

  .container {
    display: flex;
    align-items: center;
    width: 100%;
  }
`

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
`

export const SocialFeedText = styled.div`
  font-weight: 600;
  color: white;
  margin-left: 20px;
  font-size: 18px;
`

export const FeedLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

/** Items */
