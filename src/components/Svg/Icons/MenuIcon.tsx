import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 23 23' {...props} fill='none'>
    <rect width='10.2857' height='10.2857' rx='3' fill='white' />
    <rect y='12.2856' width='10.2857' height='10.2857' rx='3' fill='white' />
    <rect x='12.2856' width='10.2857' height='10.2857' rx='3' fill='white' />
    <rect x='12.2856' y='12.2856' width='10.2857' height='10.2857' rx='3' fill='white' />
  </Svg>
)

Icon.defaultProps = {
  fill: 'white',
}

export default Icon
