import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 21 14' {...props} fill='none'>
    <path
      d='M20.3999 7C20.3999 4.79279 19.037 2.83784 17.1061 2.33333L9.90934 0.294075C9.65446 0.221853 9.47705 0.543649 9.67417 0.72063L13.8124 4.43604C13.9702 4.57767 13.8911 4.83903 13.6813 4.86947L0.705027 6.75232C0.419565 6.79374 0.419559 7.20571 0.70502 7.24714L13.6813 9.13051C13.8911 9.16096 13.9702 9.42231 13.8125 9.56394L9.67417 13.2794C9.47705 13.4563 9.65446 13.7781 9.90934 13.7059L17.1061 11.6667C19.037 11.1622 20.3999 9.20721 20.3999 7Z'
      fill='white'
    />
  </Svg>
)

Icon.defaultProps = {
  fill: 'white',
}

export default Icon
