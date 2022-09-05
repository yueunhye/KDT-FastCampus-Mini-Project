import React, { useEffect } from 'react'
import { useGetFavoriteQuery } from '../store/api/favoriteApiSlice'
import Card from './Card'

const Favorite = () => {
  const { data: favorite, isLoading, isError } = useGetFavoriteQuery()
  console.log(favorite)

  return (
    <div>
      {favorite.length ? (
        <div style={{ marginTop: '80px' }}>
          {favorite.map(item => (
            <Card key={item.id} productData={item} />
          ))}
        </div>
      ) : (
        <h1 style={{ marginTop: '300px' }}>즐겨찾기가 없습니다.</h1>
      )}
    </div>
  )
}

export default Favorite
