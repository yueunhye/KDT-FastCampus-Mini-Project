import React from 'react'
import UserDetailFirst from './UserDetailFirst'
import styles from '~/scss/UserDetailPage.module.scss'

function UserDetailPage() {
  return (
    <div>
      <div className={styles.container}>
        <UserDetailFirst />
      </div>
    </div>
  )
}

export default UserDetailPage
