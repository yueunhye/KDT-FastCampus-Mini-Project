import React from 'react'
import { ChatCheckOutline } from 'antd-mobile-icons'
import styles from '../scss/Recommend.module.scss'
const Application = () => {
  return (
    <div className={styles.main}>
      <div className={styles.success}>
        <ChatCheckOutline />
        <p>
          OOO 님께서 선택하신 금융 상품이 <br />
          신청되었습니다.
        </p>
      </div>
    </div>
  )
}

export default Application
