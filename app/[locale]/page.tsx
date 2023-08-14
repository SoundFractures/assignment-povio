// import Image from 'next/image'
// import styles from '~/styles/pages/Home.module.scss'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('index')
  return (
    <section>
      <h1 className="page-title">{t('title')}</h1>
    </section>
  )
}
