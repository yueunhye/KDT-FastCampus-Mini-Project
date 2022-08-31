import React from 'react'
import styles from '../scss/Recommend.module.scss'
// import { RightOutline } from 'antd-mobile-icons'
import RecommedModal from './modal/RecommendModal'
import { useState } from 'react'

const RecommendList = ({ name, recommend }) => {
  console.log('recommend?', recommend)
  const [modal, setModal] = useState(false)

  const modalClose = () => {
    if (modal) {
      setModal()
    } else {
      setModal(!modal)
    }
  }

  return (
    <>
      <div className={styles.content}>
        <div className={styles.contentTop}>
          {name.map(user => (
            <h2 key={user.id}>hello :) {user.name} 회원님</h2>
          ))}
          <p>회원님에 맞춤형 금융상품을 소개드립니다.</p>
        </div>
        <div className={styles.contentMiddle}>
          {name.map(user => (
            <h2 key={user.id}>{user.price}</h2>
          ))}
          <p>회원님의 신청 가능한 대출금 현황.</p>
        </div>
        <div className={styles.recommendText}>
          <h3>추천상품</h3>
        </div>
      </div>
      <div>
        <div className={styles.recommendCard}>
          {recommend.slice(0, 2).map(card => (
            <div
              onClick={modalClose}
              key={card.id}
              className={
                card.tag === '적금'
                  ? `${styles.cardContainer} ${styles.orange}`
                  : product.tag[0] === '대출'
                  ? `${styles.cardContainer} ${styles.blue}`
                  : product.tag[0] === '카드'
                  ? `${styles.cardContainer} ${styles.green}`
                  : product.tag[0] === '펀드'
                  ? `${styles.cardContainer} ${styles.pink}`
                  : `${styles.cardContainer} ${styles.red}`
              }
            >
              <h2>{card.tag}</h2>
              <h3>
                {card.photo} {card.companyName}
              </h3>
              <h4>{card.productName}</h4>
              <h5>{card.description}</h5>
              {/* <RightOutline className={styles.icon} onClick={openModal} /> */}
              {modal && <RecommedModal modalClose={modalClose} />}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default RecommendList
