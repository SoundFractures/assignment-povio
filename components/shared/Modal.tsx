import React, { useEffect } from 'react'
import IconButton from '~/components/shared/IconButton'

interface Props {
  children: React.ReactNode
  isOpen: boolean
  title: string
  handleClose: () => void
}

const Modal = ({ children, isOpen, handleClose, title }: Props) => {
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
          <IconButton icon="close" onClick={handleClose} />
        </section>
        <section className="modal-title">
          <h1>{title}</h1>
        </section>
        {children}
      </div>
    </div>
  )
}

export default Modal
