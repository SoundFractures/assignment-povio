'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import useStore from '~/services/useStore'
import Modal from '~/components/shared/Modal'
import InfoBox from '~/components/profile/InfoBox'
import useApi from '~/services/useApi'
import { User } from '~/utils/models/User.model'
import BaseButton from '../base/Button'

const ProfileModal = () => {
  const t = useTranslations('profile')

  // Modal config
  const { useStoreSelector, actions, useStoreDispatch } = useStore()

  // TODO | MobileNav composable
  const dispatch = useStoreDispatch()
  const isProfileModalOpen = useStoreSelector(
    (state) => state.layout.isProfileModalOpen,
  )

  const handleSetProfileModalClose = () => {
    dispatch(actions.layout.setProfileModalOpen(false))
  }

  const { data: session } = useSession()
  const { user } = useApi(session?.user.accessToken!)

  const [profile, setProfile] = useState<User>({
    first_name: '',
    last_name: '',
  })

  const fullName = `${profile.first_name} ${profile.last_name}`
  const [loading, setLoading] = useState(false)
  const handleGetProfile = async () => {
    setLoading(true)
    await user
      .getMe()
      .then((res) => {
        setProfile(res.user)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  useEffect(() => {
    handleGetProfile()
  }, [])

  // Session
  const handleSignOut = () => {
    signOut()
    handleSetProfileModalClose()
  }

  return (
    <Modal
      isOpen={isProfileModalOpen}
      handleClose={handleSetProfileModalClose}
      className="profile-modal"
    >
      {!loading ? (
        <div className="profile">
          <section className="profile-top">
            <Image
              src="/assets/images/profile-picture.png"
              alt="Profile Logo"
              width={80}
              height={80}
            />
            <div className="profile-top-info">
              <span className="profile-top-name">{fullName}</span>
              <span className="profile-top-sightings">
                {t('sightings', { count: 47 })}
              </span>
            </div>
          </section>
          <section className="profile-info">
            <InfoBox label={t('firstName')} text={profile.first_name} />
            <InfoBox label={t('lastName')} text={profile.last_name} />
            {/* TODO |bring in day js */}
            <InfoBox label={t('dateOfBirth')} text="16. 5. 2021" />
            <InfoBox label={t('email')} text="notInApi@gmail.com" />
          </section>

          <section className="profile-logout">
            <BaseButton text={t('logout')} onClick={handleSignOut} />
          </section>
        </div>
      ) : (
        <div className="base-loader base-loader-black" />
      )}
    </Modal>
  )
}

export default ProfileModal
