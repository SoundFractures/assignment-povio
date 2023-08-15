import React from 'react'
import Image from 'next/image'

const MenuIcon = () => (
  <button className="navigation-hamburger" type="button">
    <Image
      src="/assets/icons/hamburger.svg"
      alt="Menu"
      width={24}
      height={16}
    />
  </button>
)

export default MenuIcon
