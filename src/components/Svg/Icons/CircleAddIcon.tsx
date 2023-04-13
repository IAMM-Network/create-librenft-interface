import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='11' cy='11' r='11' fill='#8B40F4' />
    <path d='M14.364 11.8H11.886V14.25H10.388V11.8H7.91V10.4H10.388V7.95H11.886V10.4H14.364V11.8Z' fill='white' />
  </Svg>
)

Icon.defaultProps = {
  fill: 'white',
}

export default Icon
