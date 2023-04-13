import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 40 40' {...props} fill='none'>
    <rect x='22.3496' y='10.3501' width='8.1' height='8.1' stroke='white' strokeWidth='1.5' strokeLinecap='round' />
    <rect x='10.3496' y='10.3501' width='8.1' height='8.1' stroke='white' strokeWidth='1.5' strokeLinecap='round' />
    <rect x='10.3496' y='21.55' width='8.1' height='8.1' stroke='white' strokeWidth='1.5' strokeLinecap='round' />
    <rect x='21.5996' y='20.8' width='3.2' height='3.2' fill='white' />
    <rect x='28' y='27.2002' width='3.2' height='3.2' fill='white' />
    <rect x='21.5996' y='27.2002' width='3.2' height='3.2' fill='white' />
    <rect x='24.7998' y='24' width='6.4' height='3.2' fill='white' />
    <rect x='0.75' y='0.75' width='38.5' height='38.5' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeDasharray='20 20' />
  </Svg>
)

Icon.defaultProps = {
  fill: 'white',
}

export default Icon
