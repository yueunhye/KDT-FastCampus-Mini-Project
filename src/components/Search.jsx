import React, { useState, useEffect } from 'react'
import Modal from '~/components/modal/Modal'
import style from '~/scss/Search.module.scss'
import axios from 'axios'
import { getProduct } from '../utils/getProduct'
import { StarOutlined, StarFilled, HeartOutlined } from '@ant-design/icons'

function Search() {
  const [isClick, setIsClick] = useState(false)
  const [modal, setModal] = useState(false)
  const [products, setProducts] = useState([])

  const getData = async () => {
    const { data } = await getProduct()
    setProducts(data)
  }
  useEffect(() => {
    getData()
  }, [])

  console.log(products)
  const toogleButton = () => {
    setIsClick(isClick => !isClick)
  }
  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }
  const changeButton = isClick ? `${style.On}` : `${style.Off}`

  return (
    <section>
      {/* SearchAll */}
      <h1>상품을 검색해주세요</h1>
      <div className={style.Button}>
        <button onClick={toogleButton} className={changeButton}>
          버튼
        </button>
        <button onClick={toogleButton} className={changeButton}>
          버튼
        </button>
        <button onClick={toogleButton} className={changeButton}>
          버튼
        </button>
        <button onClick={toogleButton} className={changeButton}>
          버튼
        </button>
        <button onClick={toogleButton} className={changeButton}>
          버튼
        </button>
        <button onClick={toogleButton} className={changeButton}>
          버튼
        </button>
        <button onClick={toogleButton} className={changeButton}>
          버튼
        </button>
        <button onClick={toogleButton} className={changeButton}>
          버튼
        </button>
        <button onClick={toogleButton} className={changeButton}>
          버튼
        </button>
        <button onClick={toogleButton} className={changeButton}>
          버튼
        </button>
        {/* <button onClick={()=> toogleButton()} style={{backgroundColor:changeColor()}}>버튼</button> */}
      </div>

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
