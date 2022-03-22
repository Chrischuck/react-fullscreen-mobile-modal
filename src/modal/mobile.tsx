import React, { useContext } from 'react'
import ModalContext from '../state'
import Fade from './fade'
import styles from './mobile.module.css'

const Mobile: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const state = useContext(ModalContext)

  return (
    <Fade className={styles.wrapper} style={state.mobileStyles}>
      {children}
    </Fade>
  )
}

export default Mobile
