export enum Tokens {
  pckb,
  eth,
  usdc,
  dai,
}

export interface SelectorProps {
  token: Tokens
  disabled: boolean
}
