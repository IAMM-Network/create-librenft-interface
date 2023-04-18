import { BigNumber } from 'ethers'
import React from 'react'

export type Handler = () => void

export interface PopupContextProps {
  isOpen: boolean
  nodeId: string
  modalNode: React.ReactNode
  setModalNode: React.Dispatch<React.SetStateAction<React.ReactNode>>
  onPresent: (node: React.ReactNode, newNodeId: string) => void
  onDismiss: Handler
  setCloseOnOverlayClick: React.Dispatch<React.SetStateAction<boolean>>
}


export interface UserProfileContextProps {
  userAddress: string;
  isConnected: boolean;
  isCollector: boolean;
  networkId: number;
  userProfilePic: string;
  profileId: BigNumber;
  setUserAddress: React.Dispatch<React.SetStateAction<string>>;
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCollector: React.Dispatch<React.SetStateAction<boolean>>;
  setNetworkId: React.Dispatch<React.SetStateAction<number>>;
  setUserProfilePic: React.Dispatch<React.SetStateAction<string>>;
  setProfileId: React.Dispatch<React.SetStateAction<BigNumber>>;
}