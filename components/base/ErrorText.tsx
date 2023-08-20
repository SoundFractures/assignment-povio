'use client'

import React from 'react'

type Props = {
  text: string
}

const ErrorText = ({ text }: Props) => (
  <span className="base-error-text text-caption">{text}</span>
)

export default ErrorText
