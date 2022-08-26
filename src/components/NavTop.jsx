import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '~/scss/NavTop.module.scss'
import iPhone from '../assets/iphone.png'
import { ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons'
import { Space, Popup } from 'antd-mobile'

const NavTop = () => {
  const notLogin = [
    { label: '회원가입', route: 'signup' },
    { label: '로그인', route: 'signin' },
  ]
  const logined = [
    { label: '회원정보 수정', route: 'edit' },
    { label: '관심상품', route: 'liked' },
    { label: '로그아웃', route: 'logout' },
  ]

  const [visible, setVisible] = useState(false)
  const [options, setOptions] = useState(notLogin)

  const isLogin = window.sessionStorage.getItem('token')

  useEffect(() => {
    if (isLogin) {
      setOptions(logined)
    }
  }, [isLogin])

  const logout = () => {
    console.log('Logout!')
    setOptions(notLogin)
  }
  return (
    <div>
      <div className={styles.top}>
        <img className={styles.notch} src={iPhone} alt='iphone notch' />
        <div className={styles.navbar}>
          <Space>
            <Link to='products'>
              <SearchOutlined
                style={{ fontSize: '20px', color: '#888888', marginTop: '1px' }}
              />
            </Link>
            <Link to='basket'>
              <ShoppingCartOutlined
                style={{ fontSize: '22px', color: '#888888' }}
              />
            </Link>
            <div
              className={styles.lineGroup}
              onClick={() => {
                setVisible(true)
              }}
            >
              <div className={styles.lineTop}></div>
              <div className={styles.lineMiddle}></div>
              <div className={styles.lineBottom}></div>
            </div>
          </Space>
        </div>
      </div>

      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false)
        }}
        bodyStyle={{
          maxHeight: '60vh',
          backgroundColor: 'transparent',
        }}
      >
        <div className={styles.menuContainer}>
          <div className={styles.menuTitle}>
            {isLogin ? (
              <p>
                <span>홍길동 님, 환영합니다.</span>
                <br /> 오늘의 추천 상품을 확인해보세요!
              </p>
            ) : (
              <p>
                당신만을 위한 맞춤 상품, <br />{' '}
                <span>지금 바로 가입하세요!</span>
              </p>
            )}
          </div>
          {options.map(option => {
            if (option.route === 'logout') {
              return (
                <div
                  key={option.route}
                  className={styles.logout}
                  onClick={logout}
                >
                  {option.label}
                </div>
              )
            }
            return (
              <div key={option.route}>
                <Link className={styles.menuList} to={option.route}>
                  {option.label}
                </Link>
              </div>
            )
          })}
        </div>
        <div
          className={styles.modalBtn}
          onClick={() => {
            setVisible(false)
          }}
        >
          취소
        </div>
      </Popup>
    </div>
  )
}

export default NavTop
