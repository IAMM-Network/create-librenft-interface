import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 10 8' {...props} fill='none'>
    <path d='M5 0L9.33013 7.5H0.669873L5 0Z' fill={props.fill} />
  </Svg>
)

Icon.defaultProps = {
  fill: 'white',
}

export default Icon
