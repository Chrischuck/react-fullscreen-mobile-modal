import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Mobile from './modal/mobile'
import Desktop from './modal/desktop'

const Modal = ({ breakpoint = 300, children }) => {
  const showFullScreenModal = useMediaQuery({
    query: `(max-width: ${breakpoint}px)`,
  })

  return showFullScreenModal ? (
    <Mobile>{children}</Mobile>
  ) : (
    <Desktop>{children}</Desktop>
  )
}

export default Modal
