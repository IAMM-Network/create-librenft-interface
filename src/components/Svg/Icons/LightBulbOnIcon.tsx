import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 28 29' {...props} fill='none'>
    <path
      d='M14.5595 29H13.4796C11.5275 29 9.94922 27.8726 9.94922 26.4781V26.3H18.0484V26.4781C18.09 27.8726 16.5116 29 14.5595 29Z'
      fill='white'
    />
    <path
      d='M10.0709 22.0979V24.95H17.9684V22.0979C17.9684 20.9951 20.0744 18.6754 20.0744 18.6754C21.3299 17.3444 22.0994 15.5951 22.0994 13.6557C22.0994 9.43456 18.4544 6.05005 13.9994 6.05005C9.50391 6.05005 5.89941 9.47258 5.89941 13.6557C5.89941 15.5571 6.66891 17.3064 7.92441 18.6754C7.88391 18.6754 10.0709 21.4895 10.0709 22.0979Z'
      fill='white'
    />
    <path d='M24.7998 12.8H26.7998' stroke='white' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round' />
    <path d='M23.4496 4.69995L22.0996 6.04995' stroke='white' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round' />
    <path d='M14 1V3' stroke='white' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round' />
    <path d='M5 4L6.35 5.35' stroke='white' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round' />
    <path d='M0.849609 12.8H2.84961' stroke='white' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round' />
  </Svg>
)

Icon.defaultProps = {
  fill: 'white',
}

export default Icon
