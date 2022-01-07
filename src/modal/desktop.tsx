import React from 'react'
import styled from 'styled-components'

const Desktop = ({ overlay = true }) => {
  const Overlay = overlay ? BaseOverlay : React.Fragment

  const overlayProps = overlay ? {} : {}
  return (
    <Overlay {...overlayProps}>
      <ModalContainer>desktop</ModalContainer>
    </Overlay>
  )
}

export default Desktop

const BaseOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`

const ModalContainer = styled.div`
  width: 50%;
  height: 50%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
`
