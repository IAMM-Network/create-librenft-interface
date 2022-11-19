import styled from 'styled-components'
import { Box } from '../../Box'

export const HeaderWrapper = styled(Box)<{ main?: boolean }>`
  align-items: center;
  background-color: ${({ main }) => (main ? '#8B40F4' : '#1A1A1A')};
  display: flex;
  height: 80px;
  position: fixed;
  width: 100vw;
  z-index: 100;

  .container {
    display: flex;
    align-items: center;
    width: 100%;
  }
`

/** Items */