import React from 'react'
import styles from '../scss/DetailCard.module.scss'
import { useState } from 'react'
import { HeartOutline } from 'antd-mobile-icons'
import { Dropdown } from 'antd-mobile'

const Detail = ({ data }) => {
  console.log('detail', data)

  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className={styles.DetailCard}>
      <div className={styles.DetailContainer}>
        {data.slice(0, 1).map(card => (
          <div key={card.id}>
            <h2>{card.tag}</h2>
            <div className={styles.Heart}>
              {isLiked ? <HeartFill /> : <HeartOutline />}
            </div>
            <h3>
              {card.photo} {card.companyName}
            </h3>
            <h4>{card.productName}</h4>
            <h5>{card.description}</h5>
          </div>
        ))}
      </div>

      <Dropdown>
        <Dropdown.Item key='sorter' title='자세히 보기'>
          <div style={{ padding: 12 }}></div>
        </Dropdown.Item>
      </Dropdown>
    </div>
  )
}

export default Detail
