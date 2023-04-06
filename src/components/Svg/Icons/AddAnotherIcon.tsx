import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 17 17' {...props} fill='none'>
    <path d="M8.5 16.4C12.6421 16.4 16 13.0422 16 8.90002C16 4.75789 12.6421 1.40002 8.5 1.40002C4.35786 1.40002 1 4.75789 1 8.90002C1 13.0422 4.35786 16.4 8.5 16.4Z" stroke="#696969" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.312 9.4H9.188V11.5H7.904V9.4H5.78V8.2H7.904V6.1H9.188V8.2H11.312V9.4Z" fill="white"/>
  </Svg>
)

Icon.defaultProps = {
  fill: 'white',
}

export default Icon
