import React, { useState, useEffect } from 'react'
import Modal from '~/components/Modal'
import style from '../scss/Search.module.scss'
import axios from 'axios'
import { getProduct } from '../utils/getProduct'
import { StarOutlined, StarFilled, HeartOutlined } from '@ant-design/icons'

function Search() {
  const buttonData = [
    { id: 1, productsName: "대출" },
    { id: 2, productsName: "펀드" },
    { id: 3, productsName: "카드" },
    { id: 4, productsName: "청약" },
    { id: 5, productsName: "적금" },
    { id: 6, productsName: "청년" },
    { id: 7, productsName: "멤버십" },
    { id: 8, productsName: "코로나" },
    { id: 9, productsName: "서울" },
    { id: 10, productsName: "담보" }
  ]
  const [clickData, setClickData] = useState(buttonData)
  const [checkedButtons, setCheckedButtons] = useState([])
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
  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }


  return (
    <section>
      {/* SearchAll */}
      <h1>상품을 검색해주세요</h1>
      <div className={style.Button}>
        {clickData.map((item)=>(
          <button onClick={()=>{
            !checkedButtons.includes(item)
              ? setCheckedButtons((checkedButtons)=>[...checkedButtons, item])
              : setCheckedButtons(checkedButtons.filter((button)=> button !== item))
          }}
          className={
            checkedButtons.includes(item)
              ? `${style.On}`
              : `${style.Off}`
          }>
            {item.productsName}
            </button>
        ))}

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
