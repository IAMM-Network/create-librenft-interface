
import React, { cloneElement, createElement, useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Context } from '../../contexts/UserProfile'
import styled from 'styled-components'
import { Flex } from '../Box'
import { Container } from '../Layout'
import Button from '../Button/Button'
import { textAlign } from 'styled-system'
import { ROUTES } from '../../pages/RoutesData'

const SectionWrapper = styled.div`
  background-color: #1A1A1A;
  left: 0;
  top: 80px;
  padding: 1rem 0;
  display: flex;  
  justify-content: center;
`

const LaunchSection: React.FC = () => {

    const navigate = useNavigate();    
  
    const{ isConnected, setIsConnected, networkId } = useContext(Context)
    const REQUIRED_NETWORK_ID = 71401

    const navigateApp = () => {

        navigate(ROUTES.FEED);

    }

  
    return (
      <SectionWrapper>
          <Button variant='cta' onClick={navigateApp}>Launch App</Button>
      </SectionWrapper>
    )
  }
  
  export default LaunchSection