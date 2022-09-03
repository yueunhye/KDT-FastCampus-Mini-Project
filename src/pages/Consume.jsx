import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { getProduct } from '../utils/getProduct'
import styles from '../scss/Consume.module.scss'

const Consume = () => {
  const [consumProduct, setConsumProduct] = useState([])
  const [userName, setUserName] = useState([{ id: 1, title: '신문수' }])
  const getData = async () => {
    const { data } = await getProduct()
    setConsumProduct(data)
  }
  console.log('consumProduct?', consumProduct)
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className={styles.consumeContent}>
        <div className={styles.consumeText}>
          {userName.map(name => (
            <h3>{name.title}</h3>
          ))}
          <p>
            회원님에 현명한 소비를 위한
            <br />
            맞춤형 카드와 멤버십 상품을 추천 드립니다.
          </p>
        </div>
        <div>
          {consumProduct.map((item, index) => (
            <Card productData={item} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Consume
