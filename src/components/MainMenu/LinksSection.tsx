import React, { useState } from "react";
import styled from "styled-components";
import { Flex } from "../Box";

const SectionWrapper = styled.div`
  background-color: #1A1A1A;
  width: 100%;
  left: 0;
  position: relative;
  padding: 1rem 0;
  display: inline-block;
  justify-content: left;
`

const MenuLink = styled.a`
  display: block;
  width: 100%;
  text-align: left;
  color: white;
`

const LinkSection: React.FC = () => {
  return (
    <SectionWrapper>
        <MenuLink href='.'>[X] Most Impact</MenuLink>
        <MenuLink href='.'>[X] Feature Drops</MenuLink>
        <MenuLink href='.'>[X] Getting Started</MenuLink>
    </SectionWrapper>
  )
}

export default LinkSection;