import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 14 18' {...props} fill='none'>
    <path d='M7.41505 18H6.61513C5.16912 18 4 17.1648 4 16.1319V16H9.99941V16.1319C10.0302 17.1648 8.86106 18 7.41505 18Z' fill='white' />
    <path
      d='M4.09 12.8873V15H9.94V12.8873C9.94 12.0704 11.5 10.3521 11.5 10.3521C12.43 9.3662 13 8.07042 13 6.6338C13 3.50704 10.3 1 7 1C3.67 1 1 3.53521 1 6.6338C1 8.04225 1.57 9.33803 2.5 10.3521C2.47 10.3521 4.09 12.4366 4.09 12.8873Z'
      stroke='white'
      stroke-width='0.5'
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
