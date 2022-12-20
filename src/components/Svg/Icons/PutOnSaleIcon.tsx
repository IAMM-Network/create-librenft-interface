import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 21 22' {...props} fill='none'>
    <path
      d="M7.45 20.684 1.3 14.399a1.052 1.052 0 0 1 .016-1.484l7.31-7.152c2.111-2.071 5.508-2.032 7.58.08l.127.135c2.072 2.111 2.032 5.508-.08 7.58l-7.31 7.151a1.069 1.069 0 0 1-1.492-.023Z"
      stroke={props.fill}
      strokeMiterlimit={10}
    />
    <path
      d="M12.944 10.445a1.945 1.945 0 1 0 0-3.89 1.945 1.945 0 0 0 0 3.89Z"
      stroke={props.fill}
      strokeMiterlimit={10}
    />
    <path
      d="M13.332 8.112A4.167 4.167 0 0 1 16.276 1a4.173 4.173 0 0 1 4.174 4.167 4.169 4.169 0 0 1-2.635 3.873"
      stroke={props.fill}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

Icon.defaultProps = {
  fill: 'white',
}

export default Icon
