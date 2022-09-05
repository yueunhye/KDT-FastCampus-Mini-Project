import React from 'react'

import style from '~/scss/Search.module.scss'
import { StarOutlined, StarFilled, SwapRightOutlined } from '@ant-design/icons'
import { useState } from 'react'
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useGetFavoriteQuery
} from '../store/api/favoriteApiSlice'

const Card = ({ productData, openModal }) => {
  const { data: favorite } = useGetFavoriteQuery()
  const isFavorite = favorite?.find(item => item.id === productData.id)
  const [addFavorite] = useAddFavoriteMutation()
  const [deleteFavorite] = useDeleteFavoriteMutation()

  const onFavoriteHandler = id => {
    isFavorite ? deleteFavorite(String(id)) : addFavorite(String(id))
    console.log(String(id))
  }

  return (
    <div className={style.Card}>
      <h5>
        <img src={productData?.logo}></img>
      </h5>
      <h2>{productData?.companyName}</h2>
      <h3>{productData?.productName}</h3>
      <h4>{productData?.description}</h4>
      <p style={{ display: 'flex', justifyContent: 'space-between' }}>
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
        <p onClick={openModal}>
          <span>신청하기</span>
          <SwapRightOutlined />
        </p>
      </p>
    </div>
  )
}

export default Card
