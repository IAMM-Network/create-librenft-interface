import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 27 12' {...props} fill='none'>
    <path
      d='M6.93713 11.0926H1.54445C1.2463 11.0926 1 10.8345 1 10.5222V1.47761C1 1.16526 1.2463 0.907227 1.54445 0.907227H6.93713C7.23529 0.907227 7.48159 1.16526 7.48159 1.47761V10.5222C7.48159 10.8345 7.23529 11.0926 6.93713 11.0926Z'
      stroke='white'
      stroke-miterlimit='10'
    />
    <path
      d='M16.1964 11.0926H10.8037C10.5056 11.0926 10.2593 10.8345 10.2593 10.5222V1.47761C10.2593 1.16526 10.5056 0.907227 10.8037 0.907227H16.1964C16.4946 0.907227 16.7409 1.16526 16.7409 1.47761V10.5222C16.7409 10.8345 16.4946 11.0926 16.1964 11.0926Z'
      stroke='white'
      stroke-miterlimit='10'
    />
    <path
      d='M25.4557 11.0926H20.063C19.7649 11.0926 19.5186 10.8345 19.5186 10.5222V1.47761C19.5186 1.16526 19.7649 0.907227 20.063 0.907227H25.4557C25.7538 0.907227 26.0001 1.16526 26.0001 1.47761V10.5222C26.0001 10.8345 25.7538 11.0926 25.4557 11.0926Z'
      stroke='white'
      stroke-miterlimit='10'
    />
  </Svg>
)

Icon.defaultProps = {
  fill: 'transparent',
}

export default Icon
