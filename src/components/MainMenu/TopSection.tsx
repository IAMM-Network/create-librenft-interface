import styled from 'styled-components'
import { FilterTextbox } from '../SearchBar/search-bar'
import LinkSection from './LinksSection'
import {CommonLinkSectionProps} from './LinksSection'

const SectionWrapper = styled.div`
  width: 100%;
  border-bottom: solid 1px #fff;
  padding: 0 1rem 2rem 1rem;
  margin-top: 1.5rem;
  gap: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TopSection = (props: CommonLinkSectionProps) => {

  return (
    <SectionWrapper>
        <FilterTextbox/>
        <LinkSection toggle={props.toggle}/>
    </SectionWrapper>
  )
}

export default TopSection
