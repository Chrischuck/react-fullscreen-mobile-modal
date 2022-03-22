import React, { useContext } from 'react'
import { useClickOutside } from '@mantine/hooks'

import ModalContext from '../state'
import Fade from './fade'
import styles from './desktop.module.css'

const Desktop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const state = useContext(ModalContext)
  const modal = useClickOutside(state.outsideClick)

  if (state.overlay) {
    return (
      <Fade className={styles.baseOverlay} style={state.overlayStyles}>
        <Fade
          className={styles.modalContainer}
          style={state.modalStyles}
          fadeRef={modal}
        >
          {children}
        </Fade>
      </Fade>
    )
  }

  return (
    <Fade
      className={styles.modalContainer}
      style={state.modalStyles}
      fadeRef={modal}
    >
      {children}
    </Fade>
  )
}

export default Desktop
