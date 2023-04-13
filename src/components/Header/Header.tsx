import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container } from '../Layout'
import { FeedLeft, HeaderWrapper, ImpactButton, ProfileImage, SocialFeedText } from './styles'
import { DiscordMediaIcon, IAMMTextIcon, LeftArrowIcon, TwitterMediaIcon } from '../Svg'
import { Box, Flex } from '../Box'
import Hamburger from 'hamburger-react'
import { Context } from '../../contexts/UserProfile'
import MainMenu from '../MainMenu/MainMenu'
import { ROUTES } from '../../pages/RoutesData'

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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)
  const { isConnected, setIsConnected, networkId } = useContext(Context)

  const isPurple = pathname === ROUTES.FEED || pathname === ROUTES.SHARE_IMPACT || pathname === ROUTES.COMPOSE_IMPACT
  const isFeed = pathname === ROUTES.FEED
  const canImpact = pathname === ROUTES.SHARE_IMPACT || pathname === ROUTES.COMPOSE_IMPACT

  const getRender = (): boolean => {
    if (pathname === '/testnet/collection/iamm') return false

    return pathname !== '/'
  }

  const REQUIRED_NETWORK_ID = 71401

  const NetworkConfig = {
    chainId: `0x${REQUIRED_NETWORK_ID.toString(16)}`,
    chainName: 'Godwoken Testnet',
    nativeCurrency: {
      name: 'pCKB',
      symbol: 'pCKB',
      decimals: 18,
    },
    rpcUrls: ['https://v1.testnet.godwoken.io/rpc'],
    blockExplorerUrls: ['https://v1.testnet.gwscan.com', 'https://gw-testnet-explorer.nervosdao.community'],
    iconUrls: ['https://raw.githubusercontent.com/nervosnetwork/ckb-explorer-frontend/master/public/favicon.ico'],
  }

  const getAccounts = async () => {
    const accounts: string[] = await window.ethereum.request({ method: 'eth_requestAccounts' })
    if (accounts.length > 0) setIsConnected(true)
    return accounts
  }

  async function addGodwokenNetwork() {
    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [NetworkConfig],
      })
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const MetaMaskInitialization = async () => {
    try {
      await getAccounts()
      if (networkId !== REQUIRED_NETWORK_ID) {
        await addGodwokenNetwork()
      }
    } catch (e) {
      console.error(e)
    }
  }

  if (pathname !== '/testnet/profile-dashboard')
    return (
      <>
        <HeaderWrapper isPurple={isPurple} main={getRender() && isConnected}>
          <Container maxWidth='90%'>
            <Flex alignItems='center' justifyContent='space-between' width='100%'>
              {isFeed ? (
                <FeedLeft>
                  <ProfileImage src='/profile-1.png' alt='profile-image' />
                  <SocialFeedText>Social Feed</SocialFeedText>
                </FeedLeft>
              ) : canImpact ? (
                <Flex alignItems={'center'} width={'100%'} justifyContent={'space-between'}>
                  <FeedLeft>
                    <div style={{ cursor: 'pointer' }} onClick={() => navigate(-1)}>
                      <LeftArrowIcon width='15px' height='15px' />
                    </div>
                  </FeedLeft>
                  <ImpactButton>Impact</ImpactButton>
                </Flex>
              ) : (
                <>
                  <IAMMTextIcon onClick={() => window.location.reload()} width='100px' fill='white' />
                  <Flex>{getRender() ? hamburguerMenu('white', isOpen, setIsOpen) : socialMedia()}</Flex>
                </>
              )}
            </Flex>
          </Container>
        </HeaderWrapper>
        {isOpen ? <MainMenu /> : <div></div>}
      </>
    )
  return <div></div>
}

export default Header
