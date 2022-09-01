import React, { forwardRef, useState } from 'react'
import style from '~/scss/Search.module.scss'
import { useNavigate } from 'react-router-dom'
import { ShopbagOutline } from 'antd-mobile-icons'

const RecommedModal = ({ modalClose }) => {
  const navigate = useNavigate()

  const applicationHandler = () => {
    navigate('/application')
  }
  return (
    <div
      className={
        open
          ? `${style.OpenModal} ${style.RecommendModal}`
          : `${style.RecommendModal}`
      }
    >
      <section>
        <header>
          <div className={style.cart}>
            <span>신청카드 정보</span>
            <ShopbagOutline className={style.cartIcon} />
          </div>
        </header>
        <main>카드 내용</main>
        <footer>
          <button type='button' onClick={applicationHandler}>
            신청하기
          </button>
          <button type='button' onClick={modalClose}>
            취소하기
          </button>
        </footer>
      </section>
    </div>
  )
}

export default RecommedModal
