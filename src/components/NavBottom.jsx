import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../scss/NavBottom.module.scss'
const NavBottom = () => {
  const navigate = useNavigate()

  const mainHandler = () => {
    navigate('/')
  }
  const recomendHandler = () => {
    navigate('/recomendation')
  }
  const productsHandler = () => {
    navigate('/products')
  }
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#55A3FF',
        fontSize: '20px',
        height: '65px',
        width: '100vw',
        textAlign: 'center',
      }}
    >
      <div className={styles.navbutton}>
        <button onClick={recomendHandler}>맞춤형 상품</button>
        <button onClick={mainHandler}>금융 상품</button>
        <button onClick={productsHandler}>현명한 소비</button>
      </div>
    </div>
  )
}

export default NavBottom
