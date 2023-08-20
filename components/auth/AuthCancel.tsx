'use client'

import React from 'react'

type Props = {
  onClick: () => void
  children: React.ReactNode
  disabled?: boolean
}
const AuthCancel = ({ children, onClick, disabled = false }: Props) => (
  <div className="auth-cancel">
    <button
      type="button"
      className="auth-cancel-button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  </div>
)

export default AuthCancel
