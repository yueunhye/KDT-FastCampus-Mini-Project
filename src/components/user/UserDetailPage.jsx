import React from 'react'
import UserDetailFirst from './UserDetailFirst'
import UserDetailEdit from './UserDetailEdit'
import UserDetailBG from '../deco/UserDetailBG'
import '~/scss/main.scss'
import { useSelector } from 'react-redux'
import userSlice from '../../store/slices/userSlice'

function UserDetailPage() {
  const isFirst = useSelector(state => state.user).isNotFirst
  return (
    <div>
      <div className='container'>
        <UserDetailBG />
        {isFirst ? <UserDetailEdit /> : <UserDetailFirst />}
      </div>
    </div>
  )
}

export default UserDetailPage
