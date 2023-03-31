import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 13 17' {...props}>
    <path
      d='M10.4141 11.5517C10.4141 11.5517 15.6899 8.44828 7.41406 1V13.8276'
      stroke='white'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M4.2069 16.0001C5.97802 16.0001 7.41379 15.0275 7.41379 13.8277C7.41379 12.6279 5.97802 11.6553 4.2069 11.6553C2.43578 11.6553 1 12.6279 1 13.8277C1 15.0275 2.43578 16.0001 4.2069 16.0001Z'
      stroke='white'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </Svg>
)

Icon.defaultProps = {
  fill: 'transparent',
}

export default Icon
