import styled from 'styled-components'
import { Box } from '../../../components/Box'

const ImpactContainer = styled(Box)`
  margin: 0 auto;
  width: 90%;
  min-width: 57vw;

  @media (max-width: 768px) {
    min-width: 90vw;
  }
`


export default ImpactContainer