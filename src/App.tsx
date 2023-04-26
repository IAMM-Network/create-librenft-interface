import { FC, useCallback, useContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { RoutesData } from './pages/RoutesData'

import './App.css'
import { Context as UserProfile } from './contexts/UserProfile'
import ScrollToTop from './util/scrollToTop'

const App: FC = () => {
  /// METAMASK
  const { setNetworkId } = useContext(UserProfile)

  const getNetworkId = useCallback(() => {
    if (typeof window.ethereum !== 'undefined') {
      const networkId = window.ethereum.chainId
      return setNetworkId(parseInt(networkId))
    }
  }, [setNetworkId])

  useEffect(() => {
    getNetworkId()
  }, [getNetworkId])

  useEffect(() => {})

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
