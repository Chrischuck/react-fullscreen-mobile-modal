import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Mobile from './mobile'
import Desktop from './desktop'

import ModalContext from '../state'

export interface ModalProps {
  isOpen: boolean
  overlay?: boolean
  breakpoint?: number
  preventFullScreen?: boolean
  outsideClick?: () => void
  mobileStyles?: React.CSSProperties
  desktopStyles?: {
    overlay?: React.CSSProperties
    modal?: React.CSSProperties
  }
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
  isOpen = true,
  overlay = true,
  breakpoint = 350,
  preventFullScreen = false,
  outsideClick = () => {},
  mobileStyles = {},
  desktopStyles = {},
  children,
}) => {
  const showFullScreenModal =
    useMediaQuery({
      query: `(max-width: ${breakpoint}px)`,
    }) && !preventFullScreen

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
