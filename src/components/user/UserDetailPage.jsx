import React from 'react'
import UserDetailFirst from './UserDetailFirst'
import UserDetailEdit from './UserDetailEdit'
import UserDetailBG from '../deco/UserDetailBG'
import '~/scss/main.scss'

function UserDetailPage() {
  return (
    <div>
      <div className='container'>
        <UserDetailBG />
        {/* <UserDetailFirst /> */}
        <UserDetailEdit />
      </div>
    </div>
  )
}

export default UserDetailPage
