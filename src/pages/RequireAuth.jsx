import React from 'react'
import { Outlet } from 'react-router-dom'
import SignIn from '../components/signin/SignIn'
import { getCookie } from '../utils/cookie'

function RequireAuth() {
  const accessToken = getCookie('accessToken')
  console.log(Boolean(accessToken))
  return accessToken ? <Outlet /> : <SignIn />
}

export default RequireAuth
