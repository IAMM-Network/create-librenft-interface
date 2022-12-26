import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12.5" cy="12.5" r="12" stroke={props.fill}/>
        <path d="M18.7502 18.6234C16.8831 16.7564 15.0117 14.885 13.1406 13.0139C13.923 13.0139 14.7203 13.0139 15.5369 13.0139C15.5369 10.7536 15.5369 8.50756 15.5369 6.25C16.6178 6.25 17.6794 6.25 18.7502 6.25C18.7502 10.3858 18.7502 14.5154 18.7502 18.6234Z" fill="white"/>
        <path d="M9.45444 18.6719C8.37761 18.6719 7.32006 18.6719 6.25 18.6719C6.25 14.5368 6.25 10.4045 6.25 6.29004C8.11568 8.15571 9.9871 10.0271 11.8639 11.9043C11.0744 11.9043 10.2741 11.9043 9.4541 11.9043C9.45444 14.171 9.45444 16.4171 9.45444 18.6719Z" fill="white"/>
    </Svg>
)

Icon.defaultProps = {
    fill: 'white',
}

export default Icon