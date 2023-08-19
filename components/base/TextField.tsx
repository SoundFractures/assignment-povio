'use client'

import React from 'react'

type Props = {
  label: string
  value: string
  onChange: React.Dispatch<React.SetStateAction<string>>
  htmlFor: string
  className?: string
  type?: 'text' | 'password'
}

const BaseTextField = ({
  value,
  onChange,
  label,
  htmlFor,
  className = '',
  type = 'text',
}: Props) => {
  const textFieldClassName = `base-text-field ${className}`

  return (
    <div className={textFieldClassName}>
      <div className="base-text-field-content">
        <label htmlFor={htmlFor} className="base-text-field-label">
          {label}
        </label>
        <input
          id={htmlFor}
          type={type}
          value={value}
          className="base-text-field-input"
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </div>
  )
}

export default BaseTextField
