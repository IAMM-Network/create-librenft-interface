import React, { createContext, useState } from 'react'
import styled from 'styled-components'
import { Box } from '../components/Box'
import { Overlay } from '../components/Overlay'
import { PopupContextProps } from './types'

const ModalWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
`

export const Context = createContext<PopupContextProps>({
  isOpen: false,
  nodeId: '',
  modalNode: null,
  setModalNode: () => null,
  onPresent: () => null,
  onDismiss: () => null,
  setCloseOnOverlayClick: () => null,
})

const PopupContext: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalNode, setModalNode] = useState<React.ReactNode>()
  const [nodeId, setNodeId] = useState('')
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true)

  const handlePresent = (node: React.ReactNode, newNodeId: string) => {
    setModalNode(node)
    setIsOpen(true)
    setNodeId(newNodeId)
  }

  const handleDismiss = () => {
    setModalNode(undefined)
    setIsOpen(false)
    setNodeId('')
  }

  const handleOverlayDismiss = () => {
    if (closeOnOverlayClick) {
      handleDismiss()
    }
  }

  return (
    <Context.Provider
      value={{
        isOpen,
        nodeId,
        modalNode,
        setModalNode,
        onPresent: handlePresent,
        onDismiss: handleDismiss,
        setCloseOnOverlayClick,
      }}
    >
      {isOpen && (
        <ModalWrapper>
          <Overlay onClick={handleOverlayDismiss}>
            {React.isValidElement(modalNode) &&
              React.cloneElement(modalNode, {
                onDismiss: handleDismiss,
              })}
          </Overlay>
        </ModalWrapper>
      )}
      {children}
    </Context.Provider>
  )
}

export default PopupContext
