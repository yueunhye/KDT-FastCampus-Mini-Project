import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import { useGetFavoriteQuery } from '../store/api/financeApi'
import axios from 'axios'

const Favorite = () => {
  const url = 'https://conan.pll0123.com/members/cart'
  const getFavorite = async () => {
    const data = await axios.get(
      'https://conan.pll0123.com/products/customized',
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY2MjMxMjQ3Nn0.s6y0a4WQQVok2LbsXcXDnPFg8q_IVIS1t8-RorE5gWlJLciugA1pI2wPLM0-qs7GzGFZZZOLKOpA6jaFm89Wbg'
        }
      }
    )
    console.log(data)
  }

  const addFavorite = () => {
    axios.post('https://conan.pll0123.com/products/concern', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY2MjI5MzY3Nn0.wq4He9vne-KBtJdwArwvqQlU8pv4x7h0yabMgaF-83I3wMklfZFiyxt9Bsjkc6CSfZGQhKkeEQjQ3aeDTdiVqg'
      },
      data: {
        id: 1
      }
    })
  }

  useEffect(() => {}, [])

  useEffect(() => {
    getFavorite()
    // addFavorite()
  }, [])

  return (
    <div>
      {/* {favoriteArr.length ? (
        <div style={{ marginTop: '80px' }}>
          {favoriteArr.map(item => (
            <Card key={item.id} productData={item} />
          ))}
        </div>
      ) : (
        <h1>즐겨찾기가 없습니다.</h1>
      )} */}
    </div>
  )
}

export default Favorite

// data: {
//   age: '11',
//   asset: '11',
//   car: '없음',
//   interest: ['개발'],
//   job: '회사원',
//   name: '홍길동',
//   realEstate: '자가',
//   salary: '2천만~4천만'
// }
