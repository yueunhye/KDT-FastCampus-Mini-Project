import React from 'react'
import style from '~/scss/Cart.module.scss'
import Card from '~/components/Card'
import { useGetFavoriteQuery } from '../store/api/financeApi'

const Cart = () => {
  const { data, isLoading, isError } = useGetFavoriteQuery()
  console.log(data)
  return (
    <section className={style.cartSection}>
      <div>
        <h1 className={style.title}>장바구니 목록이 비어있습니다.</h1>
      </div>
      <div className='content'>{/* <Card /> */}</div>
    </section>
  )
}

export default Cart
