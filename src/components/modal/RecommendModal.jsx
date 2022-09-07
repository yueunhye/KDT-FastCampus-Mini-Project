import React, { forwardRef, useState, useEffect } from 'react'
import style from '~/scss/Search.module.scss'
import { useDispatch } from 'react-redux'
import { openModal } from '../../store/slices/userSlice'

const RecommedModal = ({ getDetail }) => {
  console.log('상세정보', getDetail)

  //모달 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const dispatch = useDispatch()
  return (
    <div
      className={style.RecommendModal}
      onClick={() => dispatch(openModal(false))}
    >
      <section>
        <header>
          <div className={style.cart}>
            <span>신청카드 정보</span>
          </div>
        </header>
        <main>
          {getDetail && (
            <div className={style.logo}>
              <img src={getDetail.data.logo} alt='logo' />
              <h3>{getDetail.data.companyName}</h3>
            </div>
          )}

          {getDetail && (
            <div className={style.detail}>
              <p>{getDetail.data.productName}</p>
              <span>{getDetail.data.details}</span>
            </div>
          )}
        </main>
        <footer>
          <button type='button'>장바구니 담기</button>
          <button type='button' onClick={() => dispatch(openModal(false))}>
            취소하기
          </button>
        </footer>
      </section>
    </div>
  )
}

export default RecommedModal
