import React, { useContext } from 'react'

import {
  useTransition,
  animated,
  useSpringRef,
  useChain,
} from '@react-spring/web'
import { useClickOutside } from '@mantine/hooks'

import ModalContext from '../state'
import styles from './desktop.module.css'

const Desktop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const state = useContext(ModalContext)
  const modal = useClickOutside(state.outsideClick)
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

  const Overlay = state.overlay ? animated.div : React.Fragment
  const overlayProps = state.overlay ? { style: state.overlayStyles } : {}

  return overlayTransitions(
    (overlayStyles, item) =>
      item && (
        <Overlay
          className={styles.baseOverlay}
          style={overlayStyles}
          {...overlayProps}
        >
          {modalTransitions(
            (transitionStyles, item) =>
              item && (
                <animated.div
                  className={styles.modalContainer}
                  ref={modal}
                  style={{ ...transitionStyles, ...state.modalStyles }}
                >
                  {children}
                </animated.div>
              )
          )}
        </Overlay>
      )
  )
}

export default Desktop
