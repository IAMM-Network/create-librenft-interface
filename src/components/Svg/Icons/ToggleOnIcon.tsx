import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
    <Svg width="42" height="18" viewBox="0 0 42 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="42" height="18" rx="9" fill="#8B40F4"/>
        <circle cx="33" cy="9" r="6" fill="white"/>
    </Svg>
)

Icon.defaultProps = {
    fill: 'white',
}

export default Icon
    