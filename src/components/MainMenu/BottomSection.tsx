
import React, { cloneElement, createElement, useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Context } from '../../contexts/UserProfile'
import styled from 'styled-components'
import { Flex } from '../Box'
import { Container } from '../Layout'
import Button from '../Button/Button'

const SectionWrapper = styled.div`
  background-color: #1A1A1A;
  width: 100%;
  left: 0;
  top: 80px;
  position: relative;
  padding: 1rem 0;
  display: block;  
`


const BottomSection: React.FC = () => {

  const navigate = useNavigate();

  const{ isConnected, setIsConnected, networkId } = useContext(Context)
  const REQUIRED_NETWORK_ID = 71401

  const getAccounts = async () => {
    const accounts: string[] = await window.ethereum.request({ method: 'eth_requestAccounts' })
    console.log('accounts');
    console.log(accounts);
    if (accounts.length > 0) {
      setIsConnected(true);
      navigate('/testnet/profile-dashboard');
    }
    return accounts
  }

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
      <Container maxWidth='90%'>        
        <Button variant='cta' onClick={MetaMaskInitialization}>CONNECT WALLET</Button>
        <Button variant='uni'>LOGIN WITH UNIPASS</Button>
      </Container>
    </SectionWrapper>
  )
}

export default BottomSection