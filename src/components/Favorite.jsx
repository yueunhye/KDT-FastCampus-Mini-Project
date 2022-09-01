import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

const Favorite = () => {
  const favoriteArr = useSelector(state => state.favorite.favorite)
  console.log(favoriteArr)

  return (
    <div>
      {favoriteArr.length ? (
        <div style={{ marginTop: '80px' }}>
          {favoriteArr.map(item => (
            <Card key={item.id} productData={item} />
          ))}
        </div>
      ) : (
        <h1>즐겨찾기가 없습니다.</h1>
      )}
    </div>
  )
}

export default Favorite
