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
      <Modal isOpen={isOpen}>
        foo <button onClick={() => setIsOpen(false)}>close</button>
      </Modal>
    </>
  )
}

export const Test2 = () => <Modal>foo</Modal>
