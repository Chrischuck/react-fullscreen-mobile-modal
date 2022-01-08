import React, { useContext } from 'react'
import { useSpring, animated } from '@react-spring/web'
import styled from 'styled-components'

import ModalContext from '../state'

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
    <ModalWrapper style={{ ...animation, ...state.mobileStyles }}>
      {children}
    </ModalWrapper>
  )
}

export default Mobile

const ModalWrapper = styled(animated.div)`
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
`
