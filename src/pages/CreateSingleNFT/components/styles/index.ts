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
  border: 1px solid ${({ disabled }) => disabled ? '#696969' : '#8b40f4'};
  justify-content: space-between;
  align-items: center;

  h4 {
    color: #696969;
    font-weight: 400;
    font-size: 12px;
  }

  svg {
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
    transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`