import React, { useState } from "react";
import { Dispatch, SetStateAction } from 'react';
import styled from "styled-components";
import { Flex } from "../Box";
import { MostIcon, AnnouncementIcon, QuestionIcon } from "../Svg";
import { ROUTES } from '../../pages/RoutesData'
import { useNavigate } from "react-router-dom"
import Actions from "../../util/enums";
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
const MenuLink = styled.li`
  background-color: #1A1A1A;
  display: block;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
  color: white;
  text-decoration: none;
`
const Button = styled.button`
  background-color: #1A1A1A;
  width: 40px;
  height: 40px;
  display: inline-block;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
`

export interface CommonLinkSectionProps {
  toggle?: Dispatch<SetStateAction<boolean>>;
  onToggle?: (toggled: boolean) => any;
}

const LinkSection: React.FC<CommonLinkSectionProps> = (props: CommonLinkSectionProps) => {

  const navigate = useNavigate();

  const setAction = (event: React.MouseEvent<HTMLLIElement>) => {

    event.preventDefault();
    const button: HTMLLIElement = event.currentTarget;
    const action = button.value;
    
    switch(action) {
      case Actions.Feed:      
        props?.toggle?.(false);
        navigate(ROUTES.FEED)
        break;
      case Actions.CreateLNFT:
        navigate(ROUTES.CREATE_SINGLE_NFT)
        break;
    }

}

  return (
    <SectionWrapper>
        <MenuLink value={Actions.Feed} onClick={setAction}>
          <Button>
            <MostIcon width={16} height={16} />
          </Button> Most Impact</MenuLink>
        <MenuLink value={Actions.CreateLNFT}>
          <Button>
            <AnnouncementIcon width={16} height={16} />
          </Button> Feature Drops</MenuLink>
        <MenuLink value={Actions.Home}>
          <Button>
            <QuestionIcon width={16} height={16} />
          </Button> Getting Started</MenuLink>
    </SectionWrapper>
  )
}

export default LinkSection
