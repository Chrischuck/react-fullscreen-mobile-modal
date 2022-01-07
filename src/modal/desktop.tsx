import React, { useContext } from 'react'
import styled from 'styled-components'
import {
  useTransition,
  animated,
  useSpringRef,
  useChain,
} from '@react-spring/web'
import FocusTrap from 'focus-trap-react'

import ModalContext from '../state'

const Desktop = ({ children }) => {
  const state = useContext(ModalContext)
  const overlayRef = useSpringRef()
  const overlayTransitions = useTransition(state.isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    ref: overlayRef,
    config: {
      duration: 150,
    },
  })
  const modalRef = useSpringRef()
  const modalTransitions = useTransition(state.isOpen, {
    from: { opacity: 0, transform: 'translate(-50%, -52%)' },
    enter: { opacity: 1, transform: 'translate(-50%, -50%)' },
    leave: { opacity: 0, transform: 'translate(-50%, -52%)' },
    ref: modalRef,
    config: {
      tension: 1000,
    },
  })

  useChain(state.isOpen ? [overlayRef, modalRef] : [modalRef, overlayRef])

  const Overlay = state.overlay ? BaseOverlay : React.Fragment
  const overlayProps = state.overlay ? { style: state.overlayStyles } : {}

  return overlayTransitions(
    (styles, item) =>
      item && (
        <Overlay style={styles} {...overlayProps}>
          {modalTransitions(
            (styles, item) =>
              item && (
                <FocusTrap
                  focusTrapOptions={{
                    allowOutsideClick: (event) => {
                      if (event.type === 'click') {
                        state.outsideClick(event)
                      }
                    },
                    preventScroll: true,
                  }}
                >
                  <ModalContainer style={{ ...styles, ...state.modalStyles }}>
                    {children}
                  </ModalContainer>
                </FocusTrap>
              )
          )}
        </Overlay>
      )
  )
}

export default Desktop

const BaseOverlay = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`

const ModalContainer = styled(animated.div)`
  width: 300px;
  height: 50%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 12px;
`