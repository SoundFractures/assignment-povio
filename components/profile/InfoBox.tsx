'use client'

type Props = {
  label: string
  text: string
}

const ProfileModal = ({ label, text }: Props) => (
  <div className="profile-info-box">
    <span className="profile-info-box-label">{label}</span>
    <span className="profile-info-box-content">{text}</span>
  </div>
)

export default ProfileModal
