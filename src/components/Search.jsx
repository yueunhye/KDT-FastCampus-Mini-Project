import React, { useState, useEffect } from 'react'
import Modal from '~/components/modal/Modal'
import style from '~/scss/Search.module.scss'
import axios from 'axios'
import { getProduct } from '../utils/getProduct'

import { useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '~/store/slices/favoriteSlice'
import Card from './Card'
import { useNavigate } from 'react-router-dom'
import { useGetProductsQuery } from '~/store/api/financeApi'

function Search() {
  const buttonData = [
    { id: 1, tagContent: '대출' },
    { id: 2, tagContent: '펀드' },
    { id: 3, tagContent: '카드' },
    { id: 4, tagContent: '멤버십' },
    { id: 5, tagContent: '적금' },
    { id: 6, tagContent: '청년' },
    { id: 7, tagContent: '제테크' },
    { id: 8, tagContent: '코로나' },
    { id: 9, tagContent: '문화' },
    { id: 10, tagContent: '담보' },
  ]
  const [filterBtn, setFilterBtn] = useState(false)
  const [clickData, setClickData] = useState(buttonData)
  // console.log('clickData', clickData)
  const [checkedButtons, setCheckedButtons] = useState([])
  const [modal, setModal] = useState(false)
  // const [products, setProducts] = useState([])

  const navigate = useNavigate()

  // const getData = async () => {
  //   const { data } = await getProduct()
  //   setProducts(data)
  // }
  // useEffect(() => {
  //   getData()
  // }, [])

  console.log(import.meta.env.VITE_API_URL)

  const { data: products, isLoading, isError } = useGetProductsQuery()
  console.log(products)

  const toogleButton = () => {
    setIsClick(isClick => !isClick)
  }

  const [searchInput, setSearchInput] = useState('')
  // console.log('searchInput',searchInput)

  const openModal = () => {
    setModal(true)
    document.body.style.overflow = 'hidden'
  }
  const closeModal = () => {
    setModal(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <section>
      <h1>상품을 검색해주세요</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={() => navigate('/favorite')}>관심상품 이동</button>
      </div>
      <div className={style.Button}>
        {clickData.map(item => (
          <button
            key={item.id}
            onClick={() => {
              !checkedButtons.includes(item)
                ? setCheckedButtons(checkedButtons => [...checkedButtons, item])
                : setCheckedButtons(
                    checkedButtons.filter(button => button !== item),
                  )
            }}
            className={
              checkedButtons.includes(item) ? `${style.On}` : `${style.Off}`
            }
          >
            {item.tagContent}
          </button>
        ))}
      </div>
      <span className={style.Search}>
        <input
          placeholder='Search...'
          onChange={event => setSearchInput(event.target.value)}
        />
      </span>

      {products?.map((product, index) => (
        <Card key={index} productData={product} openModal={openModal} />
      ))}

      <Modal open={modal} close={closeModal} />
    </section>
  )
}

export default Search
