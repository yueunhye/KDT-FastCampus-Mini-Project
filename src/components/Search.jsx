import React, { useState, useEffect } from 'react'
import Modal from '~/components/modal/Modal'
import style from '~/scss/Search.module.scss'
import axios from 'axios'
import { getProduct } from '../utils/getProduct'
import { StarOutlined, StarFilled, HeartOutlined, SwapRightOutlined } from '@ant-design/icons'
import { useGetProductsQuery } from '~/store/apis/productApi'

function Search() {
  const buttonData = [
    { id: 1, tagContent: "대출" },
    { id: 2, tagContent: "펀드" },
    { id: 3, tagContent: "카드" },
    { id: 4, tagContent: "멤버십" },
    { id: 5, tagContent: "적금" },
    { id: 6, tagContent: "청년" },
    { id: 7, tagContent: "제테크" },
    { id: 8, tagContent: "코로나" },
    { id: 9, tagContent: "문화" },
    { id: 10, tagContent: "담보" }
  ]
  const [clickData, setClickData] = useState(buttonData)
  const [checkedButtons, setCheckedButtons] = useState([])
  const [modal, setModal] = useState(false)
  const [searchInput, setSearchInput] = useState()

  const { data: products, error, isLoading } = useGetProductsQuery()


  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }

  return (
    <section>
      <h1>상품을 검색해주세요</h1>
      <h1>{searchInput}</h1>
      <div className={style.Button}>
        {clickData.map((item)=>(
          <button key={item.id} onClick={()=>{
            !checkedButtons.includes(item)
              ? setCheckedButtons((checkedButtons)=>[...checkedButtons, item])
              : setCheckedButtons(checkedButtons.filter((button)=> button !== item))
          }}
          className={
            checkedButtons.includes(item)
              ? `${style.On}`
              : `${style.Off}`
          }>
            {item.tagContent}
          </button>
        ))}
      </div>
          
      <span className={style.Search}>
        <input placeholder='Search...' onChange={(event)=>setSearchInput(event.target.value)} />
      </span>

      {error ? (
        <div>에러가 발생했습니다</div>
      ) : isLoading ? (
        <div>로딩중...</div>
      ) : (
        products?.map((product, index) => (
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
            
          >
            <h2>
              {product.companyName}
              <StarOutlined style={{ fontSize: '20px'}} />
            </h2>
            <h3>{product.productName}</h3>
            <h4>{product.description}</h4>
            <p onClick={openModal}>
            신청하기
              <SwapRightOutlined />
            </p>
            
          </div>
        ))
      )}

      <Modal open={modal} close={closeModal} />
    </section>
  )
}

export default Search
