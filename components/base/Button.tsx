'use client'

import React from 'react'

type Props = {
  text: string
  loading?: boolean
  disabled?: boolean
  submit?: boolean
  onClick?: () => void
  className?: string
}

const BaseButton = ({
  text,
  loading = false,
  disabled = false,
  onClick = () => {},
  submit = false,
  className = '',
}: Props) => {
  const buttonClassName = `base-button text-1 ${className}`
  return (
    <button
      className={buttonClassName}
      type={!submit ? 'button' : 'submit'}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? <div className="base-loader" /> : text}
    </button>
  )
}

export default BaseButton
