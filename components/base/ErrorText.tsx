'use client'

import React from 'react'

type Props = {
  text: string
}

const BaseButton = ({ text }: Props) => (
  <span className="base-error-text">{text}</span>
)

export default BaseButton
