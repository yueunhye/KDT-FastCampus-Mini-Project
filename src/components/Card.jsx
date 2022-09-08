import React from 'react'
import style from '~/scss/Search.module.scss'
import {
  StarOutlined,
  StarFilled,
  SwapRightOutlined,
  DeleteOutlined
} from '@ant-design/icons'
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useGetFavoriteQuery
} from '../store/api/favoriteApiSlice'
import { openModal } from '../store/slices/userSlice'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useDeleteCartMutation } from '../store/api/cartApiSlice'


const Card = ({ productData }) => {
  const { data: favorite } = useGetFavoriteQuery()
  const [deleteCart] = useDeleteCartMutation()
  const [addFavorite] = useAddFavoriteMutation()
  const [deleteFavorite] = useDeleteFavoriteMutation()
  const dispatch = useDispatch()
  const location = useLocation()


  const isFavorite = favorite?.find(item => item.id === productData.id)

  const onFavoriteHandler = id => {
    console.log(isFavorite)
    isFavorite ? deleteFavorite(id) : addFavorite(id)
    console.log(id)
  }


  const onCartHandler = id => {
    if (confirm('장바구니에서 삭제하시겠습니까?')) {
      deleteCart(id)
    } else {
      return
    }
  }
  return (
    <div className={style.Card}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '12px'
        }}
      >
        <img src={productData?.logo}></img>
        <button
          id={style.favStar}
          onClick={() => onFavoriteHandler(productData.id)}
        >
          {isFavorite ? (
            <StarFilled style={{ fontSize: '20px' }} />
          ) : (
            <StarOutlined style={{ fontSize: '20px' }} />
          )}
        </button>
      </div>
      <h2>{productData?.companyName}</h2>
      <h3>{productData?.productName}</h3>
      <h4>{productData?.description}</h4>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div onClick={() => dispatch(openModal(true))}>
          <span>신청하기</span>
          <SwapRightOutlined />
        </div>
        {location.pathname === '/cart' ? (
          <div>
            <DeleteOutlined
              onClick={() => onCartHandler(productData.id)}
              style={{ fontSize: '20px', color: '#e63946', marginRight: '6px' }}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Card
