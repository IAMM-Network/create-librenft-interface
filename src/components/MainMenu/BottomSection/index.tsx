import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../../contexts/UserProfile'
import styled from 'styled-components'
import AdditionalMenu from './AdditionalMenu'
import WalletConnect from './WalletConnect'
import {CommonLinkSectionProps} from '../LinksSection'

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

  const { isConnected, setIsConnected, networkId } = useContext(Context)
  const [accounts, setAccounts] = useState<string[]>([])
  const REQUIRED_NETWORK_ID = 71401

  const getAccounts = useCallback(async () => {
    const accounts: string[] = await window.ethereum.request({ method: 'eth_requestAccounts' })
    console.log('accounts')
    console.log(accounts)
    if (accounts.length > 0) {
      setAccounts(accounts);
      setIsConnected(true);
      props?.toggle?.(false);
      navigate('/testnet/profile-dashboard')
    }
    return accounts
  }, [navigate, setIsConnected, props])

  useEffect(() => {
    const getAccounts = async () => {
      const accounts: string[] = await window.ethereum.request({ method: 'eth_requestAccounts' })
      if (accounts.length > 0) setAccounts(accounts)
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
      {isConnected ? <AdditionalMenu accounts={accounts} toggle={props.toggle} /> : <WalletConnect MetaMaskInitialization={MetaMaskInitialization} />}
    </SectionWrapper>
  )
}

export default BottomSection
