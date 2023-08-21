'use client'

import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useTranslations } from 'use-intl'
import { Flower } from '~/utils/models/Flower.model'
import IconButton from '~/components/shared/IconButton'

type Props = {
  flower: Flower
}

const FlowerCard = ({ flower }: Props) => {
  const { status } = useSession()
  const t = useTranslations('profile')

  return (
    <article className="home-flowers-images-item">
      <Image
        loader={({ src }) => src}
        src={flower.profile_picture}
        alt={flower.name}
        unoptimized
        width={100}
        height={100}
        className="home-flowers-images-item-image"
      />
      {status === 'authenticated' && (
        <div className="home-flowers-images-item-star">
          <IconButton
            icon={flower.favorite ? 'star-filled' : 'star'}
            onClick={() => {}}
            width={60}
            height={60}
          />
        </div>
      )}
      <div className="home-flower-image-item-content">
        <h3>{flower.name}</h3>
        <span>{flower.latin_name}</span>
        <button type="button">
          {t('sightings', { count: flower.sightings })}
        </button>
      </div>
    </article>
  )
}

export default FlowerCard
