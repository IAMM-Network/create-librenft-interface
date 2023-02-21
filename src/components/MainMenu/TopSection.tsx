import { useState, createElement } from 'react'
import styled from 'styled-components'
import { Flex } from '../Box'
import { Container } from '../Layout'
import { FilterTextbox } from '../SearchBar/search-bar'
import LinkSection from './LinksSection'


const SectionWrapper = styled.div`
  background-color: #1A1A1A;
  width: 100%;
  left: 0;
  top: 80px;
  position: relative;
  padding: 1rem 0;
  display: inline-block;
  border-bottom: solid 1px #fff;
`

const TopSection: React.FC = () => {

  return (
    <SectionWrapper>
      <Container maxWidth='90%'>
            <FilterTextbox/>
            <LinkSection/>
      </Container>
    </SectionWrapper>
  )
}

export default TopSection