'use client'

import React from 'react'

type Props = {
  onClick: () => void
  children: React.ReactNode
}
const AuthCancel = ({ children, onClick }: Props) => (
  <div className="auth-cancel">
    <button type="button" className="auth-cancel-button" onClick={onClick}>
      {children}
    </button>
  </div>
)

export default AuthCancel
