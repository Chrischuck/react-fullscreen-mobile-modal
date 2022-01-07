import { CSSProperties, createContext } from 'react'

interface State {
  isOpen: boolean
  overlay: boolean
  outsideClick: () => void
  overlayStyles: CSSProperties
  modalStyles: CSSProperties
  mobileStyles: CSSProperties
}

const ModalContext = createContext<State>({
  isOpen: false,
  overlay: true,
  outsideClick: () => {},
  overlayStyles: {},
  modalStyles: {},
  mobileStyles: {},
})

export default ModalContext
