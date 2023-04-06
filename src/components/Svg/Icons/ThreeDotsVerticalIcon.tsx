import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
    <Svg width="5" height="19" viewBox="0 0 5 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
       <circle cx="2.5" cy="2.5" r="2.5" fill="white"/>
        <circle cx="2.5" cy="9.5" r="2.5" fill="white"/>
        <circle cx="2.5" cy="16.5" r="2.5" fill="white"/>
    </Svg>
)

Icon.defaultProps = {
    fill: 'transparent',
}

export default Icon
    