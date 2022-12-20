import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
    <Svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.7676 6.11563H20.3806C19.028 2.59484 15.6265 0.108398 11.6482 0.108398H3.2938V6.09574H0.767578V8.36337H3.2938V10.631H0.767578V12.8986H3.2938V18.8263H11.6482C15.6066 18.8263 18.9683 16.3796 20.3408 12.8986H22.7676V10.631H20.9177C20.9575 10.2531 20.9972 9.85523 20.9972 9.4574C20.9972 9.07946 20.9773 8.72142 20.9376 8.36337H22.7676V6.11563ZM5.641 1.9782H9.32092C13.1799 1.9782 16.5018 3.27115 17.9339 6.09574H5.641V1.9782ZM9.32092 16.8173H5.641V12.8986H17.8743C16.4222 15.6039 13.1401 16.8173 9.32092 16.8173ZM18.6699 9.4574C18.6699 9.87512 18.65 10.2531 18.5904 10.631H5.641V8.36337H18.5904C18.6301 8.72142 18.6699 9.07946 18.6699 9.4574Z" fill="white"/>
    </Svg>
)

Icon.defaultProps = {
    fill: 'white',
}

export default Icon
    