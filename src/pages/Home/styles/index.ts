import styled from 'styled-components'
import { Box } from '../../../components/Box'

export const HomeWrapper = styled(Box)`
  background: #1a1a1a;
  height: calc(100vh - 80px); // 100vh - Header Height
  position: fixed;
  top: 80px; // Header Height
  width: 100%;

  .container {
    display: grid;
    height: 100%;
    grid-template-rows: 1fr 1fr 1fr;
    max-width: 90%;
  }
`

export const Title = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: 600;
`

export const HeadText = styled.h3`
  color: white;
  font-size: 16px;
  font-weight: 400;
`

export const HeadImage = styled.img`
  margin: 3rem 0;
`
