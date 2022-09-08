import React, { useEffect } from 'react'
import { useGetFavoriteQuery } from '../../store/api/favoriteApiSlice'
import Card from '../Card'
import FavoriteDetail from './FavoriteDetail'
import style from '../../scss/Favorite.module.scss'
const Favorite = () => {
  const { data: favorite, isLoading, isError } = useGetFavoriteQuery()
  console.log(favorite)

  return (
    <div>
      {!favorite?.length == 0 ? (
        <>
          <FavoriteDetail />
          <div className={style.favorite}>
            {favorite?.map((item, index) => (
              <Card key={index} productData={item} />
            ))}
          </div>
        </>
      ) : (
        <h1 className={style.noData}>즐겨찾기가 없습니다.</h1>
      )}
    </div>
  )
}

export default Favorite
