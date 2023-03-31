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
      d='M17 7.54118C16.1922 8.23137 15.1412 8.64706 13.9961 8.64706C11.4392 8.64706 9.36865 6.57647 9.36865 4.01961C9.36865 2.86667 9.79218 1.81569 10.4902 1'
      stroke='white'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M3.32153 12.6705C3.32153 11.2352 4.098 10.2627 5.4784 10.2627C6.57644 10.2627 7.29016 10.9058 7.43918 11.9725H6.94506C6.8431 11.149 6.32545 10.6705 5.48624 10.6705C4.3882 10.6705 3.79996 11.4862 3.79996 12.6784C3.79996 13.7058 4.24702 14.5764 5.44702 14.5764C6.50585 14.5764 7.05487 13.9725 7.01565 12.8509H5.11761V12.4745H7.14898C7.41565 12.4745 7.52545 12.5843 7.52545 12.8117V14.9215H7.03918V14.3725L7.14114 13.7921H6.99212C6.96075 14.1529 6.66271 15 5.36859 15C3.96467 14.9921 3.32153 13.9803 3.32153 12.6705Z'
      fill='white'
      stroke='white'
      stroke-width='0.35'
      stroke-miterlimit='10'
    />
    <path
      d='M10.9056 10.3334V10.7491H9.8782V14.5138H10.9056V14.9295H8.37231V14.5138H9.39977V10.7491H8.37231V10.3334H10.9056Z'
      fill='white'
      stroke='white'
      stroke-width='0.35'
      stroke-miterlimit='10'
    />
    <path
      d='M11.8232 10.3334H14.8115V10.7491H12.3095V12.4981H14.4978V12.9138H12.3095V14.9295H11.8232V10.3334Z'
      fill='white'
      stroke='white'
      stroke-width='0.35'
      stroke-miterlimit='10'
    />
  </Svg>
)

Icon.defaultProps = {
  fill: 'transparent',
}

export default Icon
