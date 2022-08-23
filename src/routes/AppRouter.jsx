import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBottom from '../components/NavBottom'
import NavTop from '../components/NavTop'

const AppRouter = () => {
  return (
    <>
      <NavTop />
      <Routes>
        <Route path="/" />
        <Route path="/auth" />
        <Route path="/finance" />
        <Route path="UserInfo" />
      </Routes>
      <NavBottom />
    </>
  )
}

export default AppRouter
