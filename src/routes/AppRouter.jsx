import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBottom from '../components/NavBottom'
import NavTop from '../components/NavTop'
import Products from '../pages/Products'
import Recomendation from '../pages/Recomendation'
import SignUpPage from '~/components/signup'
import SignIn from '~/components/signin'
import Cart from '../pages/Cart'
import Consume from '../pages/Consume'
import UserDetailPage from '~/components/user/UserDetailPage'
import Favorite from '../components/Favorite'
import Application from '../pages/Application'
import { CookiesProvider } from 'react-cookie'
import RequireAuth from '../pages/RequireAuth'

const AppRouter = () => {
  return (
    <CookiesProvider>
      <NavTop />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/signin' element={<SignIn />} />
        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path='/userdetail' element={<UserDetailPage />} />
          <Route path='/recomendation' element={<Recomendation />} />
          <Route path='/consume' element={<Consume />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/application' element={<Application />} />
        </Route>
      </Routes>
      <NavBottom />
    </CookiesProvider>
  )
}

export default AppRouter
