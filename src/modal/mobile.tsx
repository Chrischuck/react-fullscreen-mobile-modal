import React, { useContext } from 'react'
import { useSpring, animated } from '@react-spring/web'

import ModalContext from '../state'
import styles from './mobile.module.css'

const Mobile: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const state = useContext(ModalContext)
  const animation = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: {
      duration: 150,
    },
  })

  return (
    <animated.div
      className={styles.wrapper}
      style={{ ...animation, ...state.mobileStyles }}
    >
      {children}
    </animated.div>
  )
}

export default Mobile
