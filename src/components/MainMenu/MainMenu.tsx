import { useState, createElement } from 'react'
import React from "react"
import styled from 'styled-components'
import TopSection from './TopSection'
import BottomSection from './BottomSection'
import {CommonLinkSectionProps} from './LinksSection'
import SnsSection from './SnsSection'


const MenuWrapper = styled.div`
  position: fixed;
  background-color: #1a1a1a;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 5rem 1rem 4.375rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  z-index:9998;
`

const MainMenu = (props: CommonLinkSectionProps) => {
  return (
    <>
      <MenuWrapper>
        <TopSection toggle={props.toggle}/>
        <BottomSection toggle={props.toggle}/>
      </MenuWrapper>
      <SnsSection />
    </>
  )
}

export default MainMenu
