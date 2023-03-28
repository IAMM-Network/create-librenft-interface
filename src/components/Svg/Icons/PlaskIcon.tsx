import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 15 18' {...props} fill='none'>
    <path
      d='M7.34497 0.71582H8.84409V6.93717L13.1728 13.9174C13.1728 13.9174 13.8849 14.9387 13.6225 15.6227C13.3602 16.3067 12.5544 17 11.9454 17C11.327 17 7.34497 17 7.34497 17C7.34497 17 3.35357 17 2.74455 17C2.13553 17 1.32039 16.316 1.05804 15.6321C0.795694 14.9481 1.50778 13.9268 1.50778 13.9268L5.83648 6.94653V0.71582H7.34497Z'
      stroke='#1A1A1A'
      stroke-miterlimit='10'
    />
    <path d='M2.82117 15.2726L5.32206 10.9414H9.34927L11.8502 15.2726H2.82117Z' fill='#1A1A1A' stroke='#1A1A1A' />
  </Svg>
)

Icon.defaultProps = {
  fill: 'transparent',
}

export default Icon
