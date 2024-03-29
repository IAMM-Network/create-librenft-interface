import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 25 22' {...props} fill='none'>
    <path
      d='M18.167 18.864h-2.645c-2.494 0-5.004-.015-7.498.016-.736.015-.977-.247-.932-.99.045-1.019.015-2.054.015-3.089 0-1.205 0-1.205 1.127-1.205h9.933c0-.54-.015-1.02 0-1.499.03-.68.33-.85.841-.448 1.728 1.36 3.442 2.735 5.17 4.094.39.31.405.618.015.927-1.744 1.39-3.472 2.781-5.23 4.14-.45.356-.751.202-.781-.385-.03-.48-.015-.958-.015-1.56ZM7.311 3.136h2.645c2.495 0 5.004.015 7.498-.016.737-.015.977.248.932.99-.045 1.019-.015 2.054-.015 3.089 0 1.205 0 1.205-1.127 1.205H7.311c0 .54.015 1.02 0 1.499-.03.68-.33.85-.841.448C4.742 8.99 3.029 7.616 1.3 6.257c-.39-.31-.405-.618-.014-.927 1.743-1.39 3.47-2.781 5.229-4.14.45-.356.751-.202.781.385.03.48.015.958.015 1.56Z'
      stroke={props.fill}
    />
  </Svg>
)

Icon.defaultProps = {
  fill: 'white',
}

export default Icon
