import React, { useEffect } from 'react'

interface Props {
  children: React.ReactNode
  isOpen: boolean
  handleClose: () => void
}

const Modal = ({ children, isOpen, handleClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return (): void => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
  if (!isOpen) return null

  return (
    <div className="modal">
      <div className="modal-content">
        <section className="modal-top">
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </section>
        {children}
      </div>
    </div>
  )
}

export default Modal
