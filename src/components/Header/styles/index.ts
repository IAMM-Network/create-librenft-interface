import styled from 'styled-components'
import { Box } from '../../Box'

export const HeaderWrapper = styled(Box)<{ main?: boolean; isPurple: boolean }>`
  align-items: center;
  background-color: ${({ main, isPurple }) => (main ? '#8B40F4' : isPurple ? '#180a33' : '#1A1A1A')};
  display: flex;
  height: ${({ isPurple }) => (isPurple ? '60px' : '80px')};
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

export const ImpactButton = styled.button`
  background: #8b40f4;
  border-radius: 12px;
  padding: 6px 12px;
  font-weight: 600;
  color: white;
  border: none;
  cursor: pointer;
`

/** Items */
