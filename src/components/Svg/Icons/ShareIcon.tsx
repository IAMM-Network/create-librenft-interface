import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 12 12' {...props} fill='none'>
    <path
      d='M2.46632 7.48415C3.28612 7.48415 3.95071 6.81956 3.95071 5.99976C3.95071 5.17996 3.28612 4.51537 2.46632 4.51537C1.64652 4.51537 0.981934 5.17996 0.981934 5.99976C0.981934 6.81956 1.64652 7.48415 2.46632 7.48415Z'
      stroke='white'
      stroke-miterlimit='10'
    />
    <path
      d='M9.26124 3.96877C10.081 3.96877 10.7456 3.30419 10.7456 2.48439C10.7456 1.66458 10.081 1 9.26124 1C8.44144 1 7.77686 1.66458 7.77686 2.48439C7.77686 3.30419 8.44144 3.96877 9.26124 3.96877Z'
      stroke='white'
      stroke-miterlimit='10'
    />
    <path
      d='M9.26124 11C10.081 11 10.7456 10.3354 10.7456 9.51561C10.7456 8.69581 10.081 8.03123 9.26124 8.03123C8.44144 8.03123 7.77686 8.69581 7.77686 9.51561C7.77686 10.3354 8.44144 11 9.26124 11Z'
      stroke='white'
      stroke-miterlimit='10'
    />
    <path d='M3.66406 5.12308L7.77704 2.88953' stroke='white' stroke-miterlimit='10' />
    <path d='M3.4541 7.10739L7.77687 9.16147' stroke='white' stroke-miterlimit='10' />
  </Svg>
)

Icon.defaultProps = {
  fill: 'transparent',
}

export default Icon
