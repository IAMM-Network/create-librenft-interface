import styled from 'styled-components'
import { Flex } from '../Box'
import { DiscordMediaIcon, MediumMediaIcon, NervosIcon, TwitterMediaIcon } from '../Svg'
import { Context } from '../../contexts/UserProfile'
import { useContext, useEffect, useState } from 'react'

const SnsSection = () => {
  const { isConnected } = useContext(Context)
  const [accounts, setAccounts] = useState<string[]>([])

  useEffect(() => {
    const getAccounts = async () => {
      const accounts: string[] = await window.ethereum.request({ method: 'eth_requestAccounts' })
      if (accounts.length > 0) setAccounts(accounts)
    }
    if (isConnected) getAccounts()
  }, [isConnected])

  return (
    <SectionWrapper>
      <Flex style={{ gap: 24 }}>
        <Link href='#'>
          <TwitterMediaIcon width={28} height={28} />
        </Link>
        <Link href='#'>
          <MediumMediaIcon width={28} height={28} />
        </Link>
        <Link href='#'>
          <DiscordMediaIcon width={28} height={28} />
        </Link>
      </Flex>
      {isConnected && (
        <WalletLink href='#'>
          <p>8,888</p>
          <NervosIcon fill='#1A1A1A' />
        </WalletLink>
      )}
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4.375rem;
  padding: 1rem 1.5rem;
  background-color: #180a33;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Link = styled.a`
  width: 1.75rem;
  height: 1.75rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`
const WalletLink = styled.a`
  max-width: 7rem;
  height: 2.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0.75rem;
  border-radius: 5rem;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;

  p {
    color: #1a1a1a;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }
`

export default SnsSection
