import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from '../state'

const Mobile: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const state = useContext(ModalContext)

  return (
    <ModalWrapper style={{ ...state.mobileStyles }}>{children}</ModalWrapper>
  )
}

export default Mobile

const ModalWrapper = styled.div`
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
`
