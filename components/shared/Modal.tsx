import React, { useEffect } from 'react'
import IconButton from '~/components/shared/IconButton'

interface Props {
  children: React.ReactNode
  isOpen: boolean
  title?: string
  handleClose: () => void
  disabled?: boolean
  className?: string
}

const Modal = ({
  children,
  isOpen,
  handleClose,
  title = '',
  disabled = false,
  className = '',
}: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return (): void => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
  if (!isOpen) return null

  const modalClassName = `modal-content ${className}`
  return (
    <div className="modal">
      <div className={modalClassName}>
        <section className="modal-top">
          <IconButton icon="close" onClick={handleClose} disabled={disabled} />
        </section>
        {title && (
          <section className="modal-title">
            <h1>{title}</h1>
          </section>
        )}
        {children}
      </div>
    </div>
  )
}

export default Modal
