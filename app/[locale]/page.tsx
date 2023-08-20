'use client'

import { useSession } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import useApi from '~/services/useApi'
import { Flower } from '~/utils/models/Flower.model'
import FlowerCard from '~/components/home/FlowerCard'
import IconButton from '~/components/shared/IconButton'

const HomePage = () => {
  const t = useTranslations('home')
  const sightings = 8427

  const formatNumberWithDecimals = (number: number) =>
    new Intl.NumberFormat('de', {
      maximumFractionDigits: 1,
    }).format(number)

  const { data: session } = useSession()
  const { flower } = useApi(session?.user.accessToken!)

  const [flowers, setFlowers] = useState<Flower[]>([])
  const handleGetFlowers = async () => {
    await flower.getFlowers().then((res) => {
      setFlowers(res.flowers)
    })
  }

  useEffect(() => {
    handleGetFlowers()
  }, [])
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-content">
          <h1 className="home-hero-title">{t('title')}</h1>
          <h2 className="home-hero-subtitle">
            {t('subtitle', { count: formatNumberWithDecimals(sightings) })}
          </h2>
          <div className="home-hero-search">
            <input type="text" placeholder={t('search')} />
            <IconButton icon="search" width={20} height={20} />
          </div>
        </div>
      </section>
      <section className="home-flowers">
        <div className="home-flowers-images">
          {flowers.map((flower) => (
            <FlowerCard flower={flower} key={flower.id} />
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
