import React, { createContext, useState } from 'react'
import { UserProfileContextProps } from './types'


export const Context = createContext<UserProfileContextProps>({
  isConnected: false,
  isCollector: false,
  setIsCollector: () => null,
  setIsConnected: () => null
})

const PopupContext: React.FC = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false)
  const [isCollector, setIsCollector] = useState(false)

  return (
    <Context.Provider
      value={{
        isConnected,
        isCollector,
        setIsCollector,
        setIsConnected
      }}
    >
      {children}
    </Context.Provider>
  )
}
