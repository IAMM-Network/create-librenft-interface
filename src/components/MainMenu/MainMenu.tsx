import { useState, createElement } from 'react'
import styled from 'styled-components'
import { Flex } from '../Box'
import { Container } from '../Layout'
import TopSection from './TopSection'
import BottomSection from './BottomSection'

const MenuWrapper = styled.div`
  background-color: #1A1A1A;
  width: 100%;
  left: 0;
  bottom: 0;
  position: relative;
  padding: 1rem 0;
  display: inline-block;
`

const MainMenu: React.FC = () => {

  return (
    <MenuWrapper>
      <Container maxWidth='90%'>

          <TopSection/>
          <BottomSection/>

      </Container>
    </MenuWrapper>
  )
}

export default MainMenu