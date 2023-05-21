import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Context } from '../../../contexts/UserProfile'
import styled from 'styled-components'
import AdditionalMenu from './AdditionalMenu'
import WalletConnect from './WalletConnect'
import { ROUTES } from '../../../pages/RoutesData'
import { useNavigate } from 'react-router-dom'
import { CommonLinkSectionProps } from '../LinksSection'
import ProfileService from '../../../services/Profiles'

const SectionWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BottomSection: React.FC<CommonLinkSectionProps> = (props: CommonLinkSectionProps) => {
  const navigate = useNavigate()

  const { isConnected, setIsConnected, networkId, userProfilePic, setUserProfilePic, userAddress, setUserAddress, handle, setHandle } =
    useContext(Context)
  const [accounts, setAccounts] = useState<string[]>([])
  const REQUIRED_NETWORK_ID = 71401

  const getAccounts = useCallback(async () => {
    const sessionUserAddress = sessionStorage.getItem('userAddress')
    const addresses = sessionUserAddress != null && JSON.parse(sessionUserAddress)

    let accounts: string[]
    accounts = addresses?.length ? addresses : await window.ethereum.request({ method: 'eth_requestAccounts' })

    if (!addresses?.length) {
      sessionStorage.setItem('userAddress', JSON.stringify(accounts))
    }

    if (accounts.length > 0) {
      setAccounts(accounts)
      setIsConnected(true)
      setUserAddress(accounts[0])

      console.log('Getting profile...')
      const usrProfile = await ProfileService.getProfile(accounts[0])

      if (usrProfile.status === 'ok') {
        setUserProfilePic(usrProfile.data.imageURI)
        setHandle(usrProfile.data.handle)
        props?.toggle?.(false)
      } else {
        props?.toggle?.(false)
        navigate(ROUTES.PROFILE_DASHBOARD)
      }
    }

    return accounts
  }, [navigate, setIsConnected, props, setUserProfilePic, setUserAddress])

  useEffect(() => {
    const getAccounts = async () => {
      const accounts: string[] = await window.ethereum.request({ method: 'eth_requestAccounts' })
      if (accounts.length > 0) {
        setAccounts(accounts)
      }
    }
    if (isConnected) getAccounts()
  }, [isConnected])

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

  async function addGodwokenNetwork() {
    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [NetworkConfig],
      })
    }
  }

  return (
    <SectionWrapper>
      {isConnected ? (
        <AdditionalMenu accounts={accounts} toggle={props.toggle} userProfilePic={userProfilePic} />
      ) : (
        <WalletConnect MetaMaskInitialization={MetaMaskInitialization} />
      )}
    </SectionWrapper>
  )
}

export default BottomSection
