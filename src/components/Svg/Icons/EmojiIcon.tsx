import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 18 18' {...props}>
    <path
      d='M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z'
      stroke='white'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M5.64236 9.41973C6.21475 9.41973 6.67876 8.95572 6.67876 8.38333C6.67876 7.81094 6.21475 7.34692 5.64236 7.34692C5.06997 7.34692 4.60596 7.81094 4.60596 8.38333C4.60596 8.95572 5.06997 9.41973 5.64236 9.41973Z'
      fill='white'
    />
    <path
      d='M12.3831 9.44536C12.9555 9.44536 13.4195 8.98135 13.4195 8.40896C13.4195 7.83657 12.9555 7.37256 12.3831 7.37256C11.8107 7.37256 11.3467 7.83657 11.3467 8.40896C11.3467 8.98135 11.8107 9.44536 12.3831 9.44536Z'
      fill='white'
    />
    <path
      d='M5.64263 10.4562C6.78741 10.4562 7.71543 9.52813 7.71543 8.38335C7.71543 7.23857 6.78741 6.31055 5.64263 6.31055C4.49785 6.31055 3.56982 7.23857 3.56982 8.38335C3.56982 9.52813 4.49785 10.4562 5.64263 10.4562Z'
      stroke='white'
      stroke-width='0.75'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M12.3834 10.4818C13.5281 10.4818 14.4562 9.55377 14.4562 8.40899C14.4562 7.26421 13.5281 6.33618 12.3834 6.33618C11.2386 6.33618 10.3105 7.26421 10.3105 8.40899C10.3105 9.55377 11.2386 10.4818 12.3834 10.4818Z'
      stroke='white'
      stroke-width='0.75'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M2.42188 7.62952L3.5525 8.23765'
      stroke='white'
      stroke-width='0.75'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M15.5781 7.62952L14.4561 8.23765'
      stroke='white'
      stroke-width='0.75'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M7.70654 8.18636L7.71511 8.17779C8.45172 7.50113 9.58235 7.5097 10.3104 8.18636'
      stroke='white'
      stroke-width='0.75'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M5.71948 11.9551L5.73661 11.9636C7.68094 13.4283 10.3619 13.4283 12.2976 11.9551'
      stroke='white'
      stroke-width='0.75'
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
