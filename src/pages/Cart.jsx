import React from 'react'
import Card from '../components/Card'
import { useGetCartQuery } from '../store/api/cartApiSlice'

const Cart = () => {
  const { data: cart, isLoading, isError } = useGetCartQuery()

  return (
    <div>
      {cart?.length !== 0 ? (
        <>
          <div style={{ marginTop: '120px', marginBottom: '100px' }}>
            {cart?.map((item, index) => (
              <Card key={index} productData={item} />
            ))}
          </div>
        </>
      ) : (
        <h1 style={{ height: '100vh', marginTop: '300px' }}>
          장바구니에 상품이 없습니다.
        </h1>
      )}
    </div>
  )
}

export default Cart
