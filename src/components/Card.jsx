import React from 'react'

import style from '~/scss/Search.module.scss'
import { StarOutlined, StarFilled, SwapRightOutlined } from '@ant-design/icons'

import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useGetFavoriteQuery
} from '../store/api/favoriteApiSlice'
import { openModal } from '../store/slices/userSlice'
import { useDispatch } from 'react-redux'
import { useSetDetailProductMutation } from '../store/api/recommendApi'

const Card = ({ productData }) => {
  const { data: favorite } = useGetFavoriteQuery()
  const isFavorite = favorite?.find(item => item.id === productData.id)
  const [addFavorite] = useAddFavoriteMutation()
  const [deleteFavorite] = useDeleteFavoriteMutation()
  const dispatch = useDispatch()
  const [detailId, { data: detailData }] = useSetDetailProductMutation()
  console.log(detailData)

  const onFavoriteHandler = id => {
    console.log(isFavorite)
    isFavorite ? deleteFavorite(id) : addFavorite(id)
    console.log(id)
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
      <p style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <span
            onClick={e => {
              dispatch(openModal(true))
              detailId(productData.id)
              console.log(productData.id)
              e.preventDefault()
            }}
          >
            신청하기
          </span>
          <SwapRightOutlined />
        </div>
      </p>
    </div>
  )
}

export default Card
