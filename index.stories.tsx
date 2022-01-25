import React, { useState } from 'react'
import Modal from './src'

export default {
  title: 'Modal tests',
}

export const Standard = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen((o) => !o)}>Open modal</button>
      <Modal
        isOpen={isOpen}
        outsideClick={() => {
          setIsOpen(false)
        }}
      >
        <div
          style={{
            height: 200,
            width: 330,
            padding: 10,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <h1 style={{ marginTop: 0 }}>Test</h1>
          <button style={{ height: 24 }} onClick={() => setIsOpen(false)}>
            close
          </button>
        </div>
      </Modal>
    </>
  )
}

export const PreventFullScreen = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen((o) => !o)}>Open modal</button>
      <Modal
        isOpen={isOpen}
        preventFullScreen
        outsideClick={() => {
          setIsOpen(false)
        }}
      >
        <div
          style={{
            height: 200,
            width: 330,
            padding: 10,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <h1 style={{ marginTop: 0 }}>Test</h1>
          <button style={{ height: 24 }} onClick={() => setIsOpen(false)}>
            close
          </button>
        </div>
      </Modal>
    </>
  )
}
