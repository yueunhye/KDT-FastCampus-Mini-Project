import React from 'react'
import styles from '../scss/Recommend.module.scss'

const RecommendList = ({ name, recommendCard }) => {
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
      </div>
      <div>
        <span>대출</span>
        <div>
          {recommendCard.map(card => (
            <>
              <span>{card.companyName}</span>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default RecommendList
