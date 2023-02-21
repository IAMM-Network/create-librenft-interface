import { useState, createElement } from 'react'
import styled from 'styled-components'
import { Flex } from '../Box'
import { Container } from '../Layout'
import Button from '../Button/Button'


const SectionWrapper = styled.div`
  background-color: #1A1A1A;
  width: 100%;
  left: 0;
  top: 80px;
  position: relative;
  padding: 1rem 0;
  display: block;
`

const BottomSection: React.FC = () => {

  return (
    <SectionWrapper>
      <Container maxWidth='90%'>        
        <Button variant='cta'>CONNECT WALLET</Button>
        <Button variant='uni'>LOGIN WITH UNIPASS</Button>
      </Container>
    </SectionWrapper>
  )
}

export default BottomSection