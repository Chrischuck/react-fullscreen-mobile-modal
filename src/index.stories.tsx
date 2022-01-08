import React, { useState } from 'react'
import Modal from './'

export default {
  title: 'Modal tests',
}

export const Test1 = () => {
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
        <div style={{ height: 200, width: 330, padding: 10 }}>
          Test
          <button onClick={() => setIsOpen(false)}>close</button>
        </div>
      </Modal>
    </>
  )
}

export const Test2 = () => <Modal>foo</Modal>
