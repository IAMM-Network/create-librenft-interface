import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 14 12' {...props}>
    <path
      d='M5.19486 8.61793L6.77519 11L8.35553 8.61793H11.2244C11.9568 8.61793 12.5504 8.02434 12.5504 7.29199V2.32594C12.5504 1.59359 11.9568 1 11.2244 1H2.32594C1.59359 1 1 1.59359 1 2.32594V7.29199C1 8.02434 1.59359 8.61793 2.32594 8.61793H5.19486Z'
      stroke='white'
      stroke-miterlimit='10'
      stroke-linejoin='round'
    />
  </Svg>
)

Icon.defaultProps = {
  fill: 'transparent',
}

export default Icon
