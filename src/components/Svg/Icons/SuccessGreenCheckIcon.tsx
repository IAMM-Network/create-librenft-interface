import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg width='30' height='30' {...props} viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='15' cy='15' r='15' fill='#40F48B' />
    <path d='M8.25 15.75L13.5 20.25L20.625 9' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' />
  </Svg>
)

Icon.defaultProps = {
  fill: 'transparent',
}

export default Icon
