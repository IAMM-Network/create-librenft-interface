import { createElement } from 'react'
import { Box } from '../Box'
import { tokens } from './data'
import { SelectorWrapper, SelectorLabel, SelectorSymbol } from './styles'
import { SelectorProps, Tokens } from './types'

const Selector = ({ token, disabled }: SelectorProps) => {
  return (
    <SelectorWrapper disabled={disabled}>
      <Box>{createElement(tokens[token].icon, { width: '24px', height: '24px', fill: disabled ? '#696969' : 'white' })}</Box>
      <Box marginLeft='0.5rem'>
        <SelectorSymbol disabled={disabled}>{tokens[token].symbol}</SelectorSymbol>
        <SelectorLabel disabled={disabled}>{tokens[token].label}</SelectorLabel>
      </Box>
    </SelectorWrapper>
  )
}

Selector.defaultProps = {
  token: Tokens.pckb,
  disabled: false,
}

export default Selector
