import { BigNumber } from 'ethers'
import React, { createContext, useState } from 'react'
import { UserProfileContextProps } from './types'


export const Context = createContext<UserProfileContextProps>({
  userAddress: "",
  isConnected: false,
  isCollector: false,
  networkId: 0,
  userProfilePic: "",
  profileId: BigNumber.from("0"),
  setUserAddress: () =>  null,
  setIsCollector: () => null,
  setIsConnected: () => null,
  setNetworkId: () => null,
  setUserProfilePic: () => null,
  setProfileId: () => null
})

const PopupContext: React.FC = ({ children }) => {
  const [userAddress, setUserAddress] = useState<string>("")
  const [isConnected, setIsConnected] = useState(false)
  const [isCollector, setIsCollector] = useState(false)
  const [networkId, setNetworkId] = useState<number>(0)
  const [userProfilePic, setUserProfilePic] = useState<string>("")
  const [profileId, setProfileId] = useState<BigNumber>(BigNumber.from("0"))

  return (
    <Context.Provider
      value={{
        userAddress,
        isConnected,
        isCollector,
        networkId,
        userProfilePic,
        profileId,
        setIsCollector,
        setUserAddress,
        setIsConnected,
        setNetworkId,
        setUserProfilePic,
        setProfileId
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default PopupContext;
