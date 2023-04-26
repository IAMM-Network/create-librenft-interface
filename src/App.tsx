import { FC, useCallback, useContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { ROUTES, RoutesData } from './pages/RoutesData'

import './App.css'
import { Context as UserProfile } from './contexts/UserProfile'
import ScrollToTop from './util/scrollToTop'
import ProfileService from './services/Profiles'

const App: FC = () => {
  /// METAMASK
  const { setNetworkId, setIsConnected, setUserAddress, setUserProfilePic, setHandle } = useContext(UserProfile)

  const getNetworkId = useCallback(() => {
    if (typeof window.ethereum !== 'undefined') {
      const networkId = window.ethereum.chainId
      return setNetworkId(parseInt(networkId))
    }
  }, [setNetworkId])

  useEffect(() => {
    getNetworkId()
  }, [getNetworkId])

  const getAccounts = useCallback(async () => {
    const sessionUserAddress = sessionStorage.getItem('userAddress')
    const addresses = sessionUserAddress != null && JSON.parse(sessionUserAddress)

    let accounts: string[]
    accounts = addresses?.length ? addresses : await window.ethereum.request({ method: 'eth_requestAccounts' })

    if (!addresses?.length) {
      sessionStorage.setItem('userAddress', JSON.stringify(accounts))
    }

    if (accounts.length > 0) {
      setIsConnected(true)
      setUserAddress(accounts[0])

      const usrProfile = await ProfileService.getProfile(accounts[0])

      if (usrProfile.status === 'ok') {
        setUserProfilePic(usrProfile.data.imageURI)
        setHandle(usrProfile.data.handle)
      }
    }

    return accounts
  }, [setIsConnected, setUserProfilePic, setUserAddress])

  useEffect(() => {
    getAccounts()
  }, [getAccounts])

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('chainChanged', (chainId: string) => {
        const parsedChainId = parseInt(chainId)
        setNetworkId(parsedChainId)
      })
    }
  }, [setNetworkId])

  return (
    <div className='App'>
      <div className='main'>
        <BrowserRouter>
          <Header />
          <div className='appBody'>
            <ScrollToTop>
              <Routes>
                {RoutesData.map(e => (
                  <Route key={e.path} path={e.path} element={e.view} />
                ))}
              </Routes>
            </ScrollToTop>
          </div>
        </BrowserRouter>
        <div className='footer'>
          <span></span> {/*Footer*/}
        </div>
      </div>
    </div>
  )
}

export default App
