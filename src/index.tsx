import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Mobile from './modal/mobile'
import Desktop from './modal/desktop'

import ModalContext from './state'

const Modal = ({
  isOpen = true,
  overlay = true,
  breakpoint = 300,
  children,
}) => {
  const showFullScreenModal = useMediaQuery({
    query: `(max-width: ${breakpoint}px)`,
  })

  if (!isOpen) {
    return null
  }

  return (
    <ModalContext.Provider value={{ open: isOpen, overlay }}>
      {showFullScreenModal ? (
        <Mobile>{children}</Mobile>
      ) : (
        <Desktop>{children}</Desktop>
      )}
    </ModalContext.Provider>
  )
}

export default Modal
