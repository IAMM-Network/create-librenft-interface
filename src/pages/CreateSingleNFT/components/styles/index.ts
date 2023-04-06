import styled from 'styled-components'
import { Flex } from '../../../../components/Box'
import { SelectCollectionProps } from '../SelectCollection'

interface TextProps {
  color?: string
  size?: number | string
  weight?: number
  margin?: string
}

export const Text = styled.h3<TextProps>`
  color: ${({ color }) => (color ? color : 'white')};
  font-size: ${({ size }) => (size ? size : '12px')};
  font-weight: ${({ weight }) => (weight ? weight : 400)};
  margin: ${({ margin }) => (margin ? margin : '0.5rem 0')};
`
export const Hr = styled.hr`
  border: 0.5px solid #8b40f4;
  margin: 1rem 0;
  width: 100%;
`

/**
 * Select Collection
 */
export const Select = styled(Flex)<SelectCollectionProps>`
  background: transparent;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid ${({ disabled }) => (disabled ? '#696969' : '#8b40f4')};
  justify-content: space-between;
  align-items: center;

  h4 {
    color: #696969;
    font-weight: 400;
    font-size: 12px;
  }

  svg {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`

/**
 * Minted Congratulations
 */

export const CongratulationsWrapper = styled(Flex)`
  width: 100%;
  height: 100vh;
  background: #1a1a1a;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  overflow-x: hidden;
  overflow-y: scroll;
`

export const CongratulationsTitle = styled.h1`
  font-size: 21px;
  color: white;
  font-weight: 300;

  a {
    color: white;
    font-size: 21px;
    text-decoration: none;
    font-weight: 600;
  }
`
