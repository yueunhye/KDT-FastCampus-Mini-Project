import React, { useState, useEffect } from 'react'
import Modal from '~/components/modal/Modal'
import style from '~/scss/Search.module.scss'
import axios from 'axios'
import { getProduct } from '../utils/getProduct'
import { StarOutlined, StarFilled, HeartOutlined } from '@ant-design/icons'
import { FilterOutline } from 'antd-mobile-icons'
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
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()

  // const getData = async () => {
  //   const { data } = await getProduct()
  //   setProducts(data)
  // }
  // useEffect(() => {
  //   getData()
  // }, [])

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

  let selectTag = []

  const changeButton = (tag, event) => {
    if (selectTag.includes(tag)) {
      selectTag = selectTag.filter(item => item !== tag)
      event.target.style.backgroundColor = '#a6cfff'
    } else {
      selectTag.push(tag)
      event.target.style.backgroundColor = '#55a3ff'
    }
    console.log(selectTag)
  }

  const searchTag = [
    '대출',
    '펀드',
    '적금',
    '카드',
    '멤버십',
    '청년',
    '재테크',
    '코로나',
    '문화',
    '담보',
  ]

  return (
    <section>
      <h1>상품을 검색해주세요</h1>
      <FilterOutline onClick={() => setVisible(visible => !visible)} />
      {visible ? (
        <div className={style.ButtonGroup}>
          {searchTag.map(tag => {
            return (
              <input
                type='button'
                key={tag}
                value={tag}
                onClick={e => changeButton(tag, e)}
                className={
                  selectTag.includes(tag) ? `${style.On}` : `${style.Off}`
                }
              />
            )
          })}
        </div>
      ) : null}
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
