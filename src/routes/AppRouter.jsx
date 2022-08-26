import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from '../components/Auth'
import Main from '../components/Main'
import NavBottom from '../components/NavBottom'
import NavTop from '../components/NavTop'
import UserInfo from '../components/UserInfo'
import Products from '../pages/Products'
import Recomendation from '../pages/Recomendation'
import Search from '../components/Search'

const AppRouter = () => {
  return (
    <>
      <NavTop />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/recomendation' element={<Recomendation />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/products' element={<Products />} />
        <Route path="/products" element={<Products />} >
          <Route index element={<Search />} />
        </Route>
        <Route path='/userinfo' element={<UserInfo />} />
      </Routes>
      <NavBottom />
    </>
  )
}

export default AppRouter
