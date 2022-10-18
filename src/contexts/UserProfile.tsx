import React, { createContext, useState } from 'react'
import { UserProfileContextProps } from './types'


export const Context = createContext<UserProfileContextProps>({
  userAddress: "",
  isConnected: false,
  isCollector: false,
  setUserAddress: () =>  null,
  setIsCollector: () => null,
  setIsConnected: () => null
})

const PopupContext: React.FC = ({ children }) => {
  const [userAddress, setUserAddress] = useState<string>("")
  const [isConnected, setIsConnected] = useState(false)
  const [isCollector, setIsCollector] = useState(false)

  return (
    <Context.Provider
      value={{
        userAddress,
        isConnected,
        isCollector,
        setIsCollector,
        setUserAddress,
        setIsConnected
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default PopupContext;
