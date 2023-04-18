import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 17 18' {...props} fill='none'>
    <path
      d='M16.8988 10.9435C16.2304 9.32335 15.6153 7.68434 14.976 6.05477C14.2494 4.18904 13.5229 2.31858 12.7964 0.452839C12.593 -0.0620099 12.1862 -0.147031 11.7938 0.24501C11.4403 0.599264 11.0867 0.958241 10.7234 1.30777C10.7089 1.32194 10.6944 1.33611 10.6799 1.35028C10.4813 1.55811 9.71117 2.3233 9.66274 2.37053C8.75702 3.27742 7.85131 4.18431 6.94559 5.09593C6.45156 5.59188 5.95753 6.09256 5.45866 6.58379C5.32789 6.71132 5.19228 6.8672 5.0276 6.9286C3.69082 7.43872 2.34435 7.92523 1.00757 8.42591C0.164821 8.74238 -0.203278 9.54063 0.111543 10.3625C0.310123 10.8773 0.513546 11.3922 0.712125 11.907C1.03179 12.7289 1.85033 13.0926 2.69308 12.7903C2.89166 12.7195 3.09508 12.6439 3.30335 12.5683C3.69082 13.5555 4.41733 15.426 4.79996 16.4037C4.89683 16.6588 4.98885 16.8902 5.08088 17.1264C5.3182 17.7263 5.76864 18.0758 6.35954 17.986C7.20713 17.8585 7.82709 17.5657 7.98692 16.9044C7.99176 16.8902 7.99176 16.8713 7.99661 16.8572C8.12738 16.3092 7.80771 15.8369 7.64788 15.4165C7.25557 14.401 6.51937 12.5164 6.12705 11.5103C6.52421 11.3969 6.84872 11.2174 7.28947 11.2599C8.82967 11.4111 10.3796 11.4961 11.9198 11.6047C12.4332 11.6425 14.1671 11.7701 14.7193 11.8031C15.2036 11.822 15.6831 11.8645 16.1771 11.9023C16.9133 12.0157 17.1603 11.5764 16.8988 10.9435Z'
      fill='white'
    />
  </Svg>
)

Icon.defaultProps = {
  fill: 'white',
}

export default Icon