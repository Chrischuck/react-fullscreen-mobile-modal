import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Mobile from './modal/mobile'
import Desktop from './modal/desktop'

import ModalContext from './state'

interface Props {
  isOpen: boolean
  overlay?: boolean
  breakpoint?: number
  outsideClick?: () => void
  mobileStyles?: React.CSSProperties
  desktopStyles?: {
    overlay?: React.CSSProperties
    modal?: React.CSSProperties
  }
  children: React.ReactNode
}

const Modal: React.FC<Props> = ({
  isOpen = true,
  overlay = true,
  breakpoint = 350,
  outsideClick = () => {},
  mobileStyles = {},
  desktopStyles = {},
  children,
}) => {
  const showFullScreenModal = useMediaQuery({
    query: `(max-width: ${breakpoint}px)`,
  })

  if (!isOpen) {
    return null
  }

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        overlay,
        outsideClick,
        mobileStyles,
        overlayStyles: desktopStyles?.overlay ?? {},
        modalStyles: desktopStyles?.modal ?? {},
      }}
    >
      {showFullScreenModal ? (
        <Mobile>{children}</Mobile>
      ) : (
        <Desktop>{children}</Desktop>
      )}
    </ModalContext.Provider>
  )
}

export default Modal
