import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.944 10.41C11.8881 10 11.5403 9.68945 11.1179 9.68945C10.5651 9.68945 10.1179 9.24225 10.1179 8.68946V8.53418C10.1179 7.62113 9.37881 6.88821 8.47197 6.88821H5.97508C5.73905 6.88821 5.55272 6.69567 5.55272 6.46585C5.55272 6.22983 5.73905 6.04349 5.97508 6.04349C6.10551 6.04349 6.26079 6.04349 6.40986 6.04349C6.92539 6.04349 7.34154 5.62734 7.34154 5.11182V5.08697C7.34154 4.6025 7.73284 4.20498 8.22353 4.20498H8.90676C9.57756 4.20498 10.1179 3.66461 10.1179 2.9938V1.87579C9.21111 1.323 8.14278 1.00623 6.99992 1.00623C5.17384 1.00623 3.5403 1.81989 2.44092 3.1056C2.56514 5.04349 3.55893 6.83231 5.18005 7.95033L5.25458 8.00001C5.96887 8.49691 6.39744 9.31057 6.39744 10.1801C6.39744 10.4286 6.5962 10.6273 6.84464 10.6273C7.18626 10.6273 7.45955 10.9006 7.45955 11.2422V12.9876C9.3167 12.8447 10.944 11.8572 11.944 10.41Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
)

Icon.defaultProps = {
    fill: 'white',
}

export default Icon
    