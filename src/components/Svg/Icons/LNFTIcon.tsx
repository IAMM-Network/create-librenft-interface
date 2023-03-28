import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 11 16' {...props} fill='none'>
    <path
      d='M9.54933 15H1.784C1.35467 15 1 14.6453 1 14.216V1.784C1 1.35467 1.35467 1 1.784 1H9.54933C9.97867 1 10.3333 1.35467 10.3333 1.784V14.216C10.3333 14.6453 9.97867 15 9.54933 15Z'
      stroke='white'
      stroke-miterlimit='10'
    />
  </Svg>
)

Icon.defaultProps = {
  fill: 'transparent',
}

export default Icon
