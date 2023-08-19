'use client'

import React from 'react'

type Props = {
  id: string
  label: string
  value: string
  onChange: React.Dispatch<React.SetStateAction<string>>
  onBlur?: React.Dispatch<React.SetStateAction<string>>
  className?: string
  type?: 'text' | 'password'
  error?: string
}

const BaseTextField = ({
  id,
  value,
  onChange,
  onBlur = () => {},
  label,
  className = '',
  type = 'text',
  error = '',
}: Props) => {
  const isError = error.length > 0
  const textFieldClassName = `base-text-field ${className} ${
    isError ? 'base-error-text-field' : ''
  }`

  return (
    <div>
      <div className={textFieldClassName}>
        <div className="base-text-field-content">
          <label htmlFor={id} className="base-text-field-label">
            {label}
          </label>

          <input
            id={id}
            type={type}
            value={value}
            className="base-text-field-input"
            onChange={(event) => onChange(event.target.value)}
            onBlur={(event) => onBlur(event.target.value)}
          />
        </div>
      </div>
      {isError && <div className="base-text-field-error-caption">{error}</div>}
    </div>
  )
}

export default BaseTextField
