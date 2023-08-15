// import Image from 'next/image'
// import styles from '~/styles/pages/Home.module.scss'
import { useTranslations } from 'next-intl'

const HomePage = () => {
  const t = useTranslations('home')
  const sightings = 8427

  const formatNumberWithDecimals = (number: number) =>
    new Intl.NumberFormat('de', {
      maximumFractionDigits: 1,
    }).format(number)

  return (
    <section className="home-hero">
      <div className="home-hero-content">
        <h1 className="home-hero-title">{t('title')}</h1>
        <h2 className="home-hero-subtitle">
          {t('subtitle', { count: formatNumberWithDecimals(sightings) })}
        </h2>
      </div>
    </section>
  )
}

export default HomePage
