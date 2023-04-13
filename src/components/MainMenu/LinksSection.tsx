import React from 'react'
import styled from 'styled-components'
import FireIcon from '../Svg/Icons/FireIcon'
import HelpIcon from '../Svg/Icons/HelpIcon'
import SpeakerIcon from '../Svg/Icons/SpeakerIcon'

const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
`

const MenuLink = styled.a`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  gap: 1rem;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`

const LinkSection: React.FC = () => {
  return (
    <SectionWrapper>
      <MenuLink href='.'>
        <FireIcon width={20} height={20} />
        <span>Most Impact</span>
      </MenuLink>
      <MenuLink href='.'>
        <SpeakerIcon width={20} height={20} />
        <span>Feature Drops</span>
      </MenuLink>
      <MenuLink href='.'>
        <HelpIcon width={20} height={20} />
        <span>Getting Started</span>
      </MenuLink>
    </SectionWrapper>
  )
}

export default LinkSection
