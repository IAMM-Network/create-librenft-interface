import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
    <Svg viewBox="0 0 15 19" fill="none" {...props}>
        <path d="M13.1709 5.8435C13.0644 5.67031 12.8048 5.67672 12.7049 5.85633C12.4519 6.34385 11.9526 7.15851 11.2003 7.80639C11.0072 7.97318 10.7077 7.79998 10.7676 7.55622C11.0738 6.33743 10.974 3.74591 6.87958 0.0702988C6.71314 -0.0836534 6.43352 0.0318107 6.43352 0.256324C6.43352 1.30192 5.90092 3.59195 2.30585 7.08795C-2.78717 12.0465 1.27393 19 7.5187 19C13.6503 19 17.4584 12.7778 13.1709 5.8435ZM9.12982 16.5881C8.63051 16.9024 7.95144 16.9794 7.35226 16.9601C4.22322 16.8511 3.411 11.7322 7.67848 9.61533C7.79166 9.5576 7.93147 9.64099 7.91149 9.75646C7.81163 10.4428 7.44547 12.0272 8.47739 12.5917C9.46936 13.1434 11.9992 14.7791 9.12982 16.5881Z" fill="white"/>
    </Svg>
  )
  
  Icon.defaultProps = {
    fill: 'white',
  }
  
  export default Icon