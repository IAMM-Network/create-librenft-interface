import styled from 'styled-components'
import { Flex } from '../../Box'

export const SelectorWrapper = styled(Flex)<{ disabled: boolean }>`
  background-color: ${({ disabled }) => (disabled ? 'transparent' : '#8B40F4')};
  border: 1px solid #8b40f4;
  border-color: ${({ disabled }) => (disabled ? '#696969' : '#8B40F4')};
  color: white;
  width: 100%;
  height: 50px !important;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

export const SelectorSymbol = styled.h3<{ disabled: boolean }>`
  color: ${({ disabled }) => (disabled ? '#696969' : 'white')};
  font-size: 12px;
  font-weight: bold;
  margin: 0;
`

export const SelectorLabel = styled.span<{ disabled: boolean }>`
  color: ${({ disabled }) => (disabled ? '#696969' : 'white')};
  font-size: 12px;
  margin: 0;
`
