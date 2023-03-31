import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 18 18' {...props}>
    <path
      d='M12.7804 17H5.21961C2.8902 17 1 15.1098 1 12.7804V5.21961C1 2.8902 2.8902 1 5.21961 1H12.7804C15.1098 1 17 2.8902 17 5.21961V12.7804C17 15.1098 15.1098 17 12.7804 17Z'
      stroke='white'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M1 13.4388L5.03922 9.58782L7.47059 12.0192L12.7255 5.97998L17 10.6937'
      stroke='white'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M5.04128 6.76519C5.90761 6.76519 6.60991 6.06289 6.60991 5.19656C6.60991 4.33023 5.90761 3.62793 5.04128 3.62793C4.17496 3.62793 3.47266 4.33023 3.47266 5.19656C3.47266 6.06289 4.17496 6.76519 5.04128 6.76519Z'
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
