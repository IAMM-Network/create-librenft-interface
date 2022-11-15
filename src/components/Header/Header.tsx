import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Container } from '../Layout'
import { HeaderWrapper } from './styles'
import { DiscordMediaIcon, IAMMTextIcon, TwitterMediaIcon } from '../Svg'
import { Box, Flex } from '../Box'
import Hamburger from 'hamburger-react'

const socialMedia = () => (
  <Flex>
    <Box marginRight={24}>
      <a href='https://twitter.com/IAMM_Network' target='_blank' rel='noreferrer'>
        <TwitterMediaIcon />
      </a>
    </Box>
    <Box>
      <a href='https://discord.com/invite/jQ4rGjj7fZ' target='_blank' rel='noreferrer'>
        <DiscordMediaIcon />
      </a>
    </Box>
  </Flex>
)

const hamburguerMenu = (color: string, toggled: boolean, toggle: React.Dispatch<React.SetStateAction<boolean>>) => (
  <Flex>
    <Hamburger color={color} toggled={toggled} toggle={toggle} />
  </Flex>
)

const Header: React.FC = () => {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const getRender = (): boolean => {
    if (pathname === '/collection/iamm') return false

    return pathname !== '/'
  }

  if (pathname !== '/profile-dashboard')
    return (
      <HeaderWrapper main={getRender()}>
        <Container maxWidth='90%'>
          <Flex alignItems='center' justifyContent='space-between' width='100%'>
            <IAMMTextIcon width='100px' fill='white' />
            <Flex>
              {getRender() ? hamburguerMenu('white', isOpen, setIsOpen) : socialMedia()}
            </Flex>
          </Flex>
        </Container>
      </HeaderWrapper>
    )
  return <div></div>
}

export default Header
