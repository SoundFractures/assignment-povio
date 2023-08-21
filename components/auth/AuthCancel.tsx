'use client'

import React from 'react'

type Props = {
  onClick: () => void
  children: React.ReactNode
  disabled?: boolean
}
// The text below the action buttons of Login and Register modals
const AuthCancel = ({ children, onClick, disabled = false }: Props) => (
  <div className="auth-cancel text-caption">
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
