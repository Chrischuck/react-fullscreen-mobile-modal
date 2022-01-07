import React from 'react'
import styled from 'styled-components'

const Mobile = ({ children }) => {
  return <ModalWrapper>{children}</ModalWrapper>
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
