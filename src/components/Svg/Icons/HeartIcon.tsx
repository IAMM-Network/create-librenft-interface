import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 13 12' {...props}>
    <path
      d='M6.38697 11C8.8208 9.25167 11.982 6.16212 11.982 4.23115C11.982 2.30019 10.681 1 8.95275 1C7.22453 1 6.38697 2.36214 6.38697 2.36214C6.38697 2.36214 5.54861 1 3.82039 1C2.09218 1 0.791992 2.30099 0.791992 4.23196C0.791992 6.16293 3.95234 9.25247 6.38697 11Z'
      stroke='white'
      stroke-miterlimit='10'
    />
  </Svg>
)

Icon.defaultProps = {
  fill: 'transparent',
}

export default Icon
