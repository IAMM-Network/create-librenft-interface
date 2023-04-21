import { BigNumber } from 'ethers'
import React, { createContext, useState } from 'react'
import { UserProfileContextProps } from './types'

export const Context = createContext<UserProfileContextProps>({
  userAddress: '',
  isConnected: false,
  isCollector: false,
  networkId: 0,
  userProfilePic: '',
  profileId: BigNumber.from('0'),
  handle: '',
  contractAddress: '',
  setUserAddress: () => null,
  setIsCollector: () => null,
  setIsConnected: () => null,
  setNetworkId: () => null,
  setUserProfilePic: () => null,
  setProfileId: () => null,
  setHandle: () => null,
  setContractAddress: () => null,
})

const UserProfile: React.FC = ({ children }) => {
  const [userAddress, setUserAddress] = useState<string>('')
  const [isConnected, setIsConnected] = useState(false)
  const [isCollector, setIsCollector] = useState(false)
  const [networkId, setNetworkId] = useState<number>(0)
  const [userProfilePic, setUserProfilePic] = useState<string>('')
  const [profileId, setProfileId] = useState<BigNumber>(BigNumber.from('0'))
  const [handle, setHandle] = useState<string>('')
  const [contractAddress, setContractAddress] = useState<string>('')

  return (
    <Context.Provider
      value={{
        userAddress,
        isConnected,
        isCollector,
        networkId,
        userProfilePic,
        profileId,
        handle,
        contractAddress,
        setIsCollector,
        setUserAddress,
        setIsConnected,
        setNetworkId,
        setUserProfilePic,
        setProfileId,
        setHandle,
        setContractAddress,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default UserProfile
