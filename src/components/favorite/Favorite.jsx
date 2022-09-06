import React, { useEffect } from 'react'
import { useGetFavoriteQuery } from '../../store/api/favoriteApiSlice'
import Card from '../Card'
import FavoriteDetail from './FavoriteDetail'
import useInquireUserDataQuery from '../../store/api/userApiSlice'
const Favorite = () => {
  const { data: favorite, isLoading, isError } = useGetFavoriteQuery()
  // const { data: user } = useInquireUserDataQuery()
  console.log(favorite)
  console.log(user)

  return (
    <div>
      {!favorite?.length == 0 ? (
        <>
          <FavoriteDetail />
          <div style={{ marginTop: '80px', marginBottom: '70px' }}>
            {favorite?.map((item, index) => (
              <Card key={index} productData={item} />
            ))}
          </div>
        </>
      ) : (
        <h1 style={{ marginTop: '300px' }}>즐겨찾기가 없습니다.</h1>
      )}
    </div>
  )
}

export default Favorite
