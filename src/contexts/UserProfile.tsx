import React, { createContext, useState } from 'react'
import { UserProfileContextProps } from './types'


export const Context = createContext<UserProfileContextProps>({
  userAddress: "",
  isConnected: false,
  isCollector: false,
  networkId: 0,
  userProfilePic: "",
  setUserAddress: () =>  null,
  setIsCollector: () => null,
  setIsConnected: () => null,
  setNetworkId: () => null,
  setUserProfilePic: () => null
})

const PopupContext: React.FC = ({ children }) => {
  const [userAddress, setUserAddress] = useState<string>("")
  const [isConnected, setIsConnected] = useState(false)
  const [isCollector, setIsCollector] = useState(false)
  const [networkId, setNetworkId] = useState<number>(0)
  const [userProfilePic, setUserProfilePic] = useState<string>("")

  return (
    <Context.Provider
      value={{
        userAddress,
        isConnected,
        isCollector,
        networkId,
        userProfilePic,
        setIsCollector,
        setUserAddress,
        setIsConnected,
        setNetworkId,
        setUserProfilePic
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default PopupContext;
