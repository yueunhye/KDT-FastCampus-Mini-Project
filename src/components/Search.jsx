import React, { useState, useEffect } from 'react'
import Modal from '~/components/modal/Modal'
import style from '~/scss/Search.module.scss'
import axios from 'axios'
import { getProduct } from '../utils/getProduct'
import { StarOutlined, StarFilled, HeartOutlined } from '@ant-design/icons'
import { FilterOutline } from 'antd-mobile-icons'

function Search() {
  const [modal, setModal] = useState(false)
  const [products, setProducts] = useState([])
  const [visible, setVisible] = useState(false)

  const getData = async () => {
    const { data } = await getProduct()
    setProducts(data)
  }
  useEffect(() => {
    getData()
  }, [])

  // console.log(products)

  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
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
      {/* SearchAll */}
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
        <input placeholder='Search...' />
      </span>

      {products.map((product, index) => (
        <div
          key={index}
          className={
            product.tag === '적금'
              ? `${style.Card} ${style.orange}`
              : product.tag[0] === '대출'
              ? `${style.Card} ${style.blue}`
              : product.tag[0] === '카드'
              ? `${style.Card} ${style.green}`
              : product.tag[0] === '펀드'
              ? `${style.Card} ${style.pink}`
              : `${style.Card} ${style.red}`
          }
          onClick={openModal}
        >
          <h2>{product.companyName}</h2>
          <HeartOutlined />
          <h3>{product.description}</h3>
          <div className={style.details}>
            <p>{product.details.slice(0, 2)}</p>
            <p>{product.details.slice(4, 7)}</p>
            <p>{product.details.slice(9, 12)}</p>
          </div>
        </div>
      ))}
      {/* <div className={`${style.Card} ${style.orange}`} onClick={openModal}>
        <h2>productName</h2>
        <h3>description</h3>
        <p>details</p>
        <p>details</p>
        <p>details</p>
      </div>

      <div className={`${style.Card} ${style.green}`} onClick={openModal}>
        <h2>productName</h2>
        <h3>description</h3>
        <p>details</p>
        <p>details</p>
        <p>details</p>
      </div> */}
      <Modal open={modal} close={closeModal} />
    </section>
  )
}

export default Search
