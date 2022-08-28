import React from 'react'
import styles from '../scss/Recommend.module.scss'
import { RightOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'

const RecommendList = ({ name, recommend }) => {
  console.log('recommend?', recommend)
  const navigate = useNavigate()

  const detailHandler = () => {
    navigate(`/detail`)
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
          {recommend.slice(0, 1).map(card => (
            <div key={card.id} className={styles.cardContainer}>
              <h2>{card.tag}</h2>
              <h3>
                {card.photo} {card.companyName}
              </h3>
              <h4>{card.productName}</h4>
              <h5>{card.description}</h5>
              <RightOutline className={styles.icon} onClick={detailHandler} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default RecommendList
