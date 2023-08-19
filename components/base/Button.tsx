'use client'

import React from 'react'

type Props = {
  text: string
  loading?: boolean
  disabled?: boolean
  submit?: boolean
  onClick: () => void
  className?: string
}

const BaseButton = ({
  text,
  loading,
  disabled,
  onClick,
  submit,
  className,
}: Props) => {
  const buttonClassName = `base-button ${className}`
  return (
    <button
      className={buttonClassName}
      type={!submit ? 'button' : 'submit'}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? <div className="base-loader" /> : text}
    </button>
  )
}

BaseButton.defaultProps = {
  submit: false,
  loading: false,
  disabled: false,
  className: '',
}

export default BaseButton
