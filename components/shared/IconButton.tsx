'use client'

import React from 'react'
import Image from 'next/image'

type Props = {
  icon: 'menu' | 'close'
  onClick: () => void
  disabled?: boolean
}

const MenuIcon = ({ icon, onClick, disabled = false }: Props) => (
  <button className="icon-button" type="button" disabled={disabled}>
    <Image
      src={`/assets/icons/${icon}.svg`}
      alt="Menu"
      width={24}
      height={24}
      onClick={onClick}
    />
  </button>
)

export default MenuIcon
