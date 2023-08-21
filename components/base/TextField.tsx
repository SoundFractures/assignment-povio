'use client'

import React from 'react'

type Props = {
  id: string
  label: string
  value: string
  onChange: React.Dispatch<React.SetStateAction<string>>
  onBlur?: React.Dispatch<React.SetStateAction<any>> // Couldn't find the right type?
  type?: 'text' | 'password'
  error?: boolean
  errorText?: string
}

const BaseTextField = ({
  id,
  value,
  onChange,
  onBlur = () => {},
  label,
  type = 'text',
  error = false,
  errorText = '',
}: Props) => {
  const textFieldClassName = `base-text-field ${
    error ? 'base-error-text-field' : ''
  }`

  return (
    <div className="base-text-field-container">
      <div className={textFieldClassName}>
        <div className="base-text-field-content">
          <label htmlFor={id} className="base-text-field-label">
            {label}
          </label>

          <input
            id={id}
            type={type}
            value={value}
            className="base-text-field-input text-caption"
            aria-label={label}
            onChange={(event) => onChange(event.target.value)}
            onBlur={(event) => onBlur(event)}
          />
        </div>
      </div>
      {error && (
        <div className="base-text-field-error-caption">{errorText}</div>
      )}
    </div>
  )
}

export default BaseTextField
