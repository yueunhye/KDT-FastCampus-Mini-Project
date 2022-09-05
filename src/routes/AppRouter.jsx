import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from '../components/Auth'
import Main from '../components/Main'
import NavBottom from '../components/NavBottom'
import NavTop from '../components/NavTop'
import UserInfo from '../components/UserInfo'
import Products from '../pages/Products'
import Recomendation from '../pages/Recomendation'
import SignUpPage from '~/components/signup'
import SignIn from '~/components/signin'
import Basket from '../pages/Basket'
import Consume from '../pages/Consume'
import UserDetailPage from '~/components/user/UserDetailPage'
import Favorite from '../components/Favorite'
import Application from '../pages/Application'
import { CookiesProvider } from 'react-cookie'

const AppRouter = () => {
  return (
    <CookiesProvider>
      <NavTop />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/userdetail' element={<UserDetailPage />} />
        <Route path='/recomendation' element={<Recomendation />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/products' element={<Products />} />
        <Route path='/userinfo' element={<UserInfo />} />
        <Route path='/consume' element={<Consume />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/application' element={<Application />} />
      </Routes>
      <NavBottom />
    </CookiesProvider>
  )
}

export default AppRouter
