import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 15 8' {...props} fill='none'>
    <path d='M1 .554 7.5 7 14 .554' stroke={props.fill} strokeLinecap='round' strokeLinejoin='bevel' />
  </Svg>
)

Icon.defaultProps = {
  fill: 'white',
}

export default Icon
