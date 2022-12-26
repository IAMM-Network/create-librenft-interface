import React, { createContext, useState } from 'react'
import { UserProfileContextProps } from './types'


export const Context = createContext<UserProfileContextProps>({
  userAddress: "",
  isConnected: false,
  isCollector: false,
  networkId: 0,
  setUserAddress: () =>  null,
  setIsCollector: () => null,
  setIsConnected: () => null,
  setNetworkId: () => null
})

const PopupContext: React.FC = ({ children }) => {
  const [userAddress, setUserAddress] = useState<string>("")
  const [isConnected, setIsConnected] = useState(false)
  const [isCollector, setIsCollector] = useState(false)
  const [networkId, setNetworkId] = useState<number>(0)

  return (
    <Context.Provider
      value={{
        userAddress,
        isConnected,
        isCollector,
        networkId,
        setIsCollector,
        setUserAddress,
        setIsConnected,
        setNetworkId
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default PopupContext;
