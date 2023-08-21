'use client'

import React from 'react'
import Image from 'next/image'

type Props = {
  icon: 'menu' | 'close' | 'star' | 'star-filled' | 'search'
  onClick?: () => void
  disabled?: boolean
  width?: number
  height?: number
  className?: string
}

const MenuIcon = ({
  icon,
  onClick = () => {},
  disabled = false,
  width = 24,
  height = 24,
  className = '',
}: Props) => {
  const iconButtonClass = `icon-button ${className}`

  return (
    <button className={iconButtonClass} type="button" disabled={disabled}>
      <Image
        src={`/assets/icons/${icon}.svg`}
        alt="Menu"
        width={width}
        height={height}
        onClick={onClick}
      />
    </button>
  )
}

export default MenuIcon
