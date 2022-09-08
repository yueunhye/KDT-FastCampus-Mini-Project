import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '~/scss/NavTop.module.scss'
import iPhone from '../../public/assets/iphone.png'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { SearchOutline } from 'antd-mobile-icons'
import { Space, Popup, Badge } from 'antd-mobile'
import { getCookie } from '../utils/cookie'
import {
  useLogoutMutation,
  useRefreshDataMutation
} from '../store/api/userApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../store/slices/userSlice'
import { setUser } from '../store/slices/userSlice'
import { useGetCartQuery } from '../store/api/cartApiSlice'

const NavTop = () => {
  const dispatch = useDispatch()
  const accessToken = getCookie('accessToken')
  const [refresh, { data: userData, isError }] = useRefreshDataMutation()
  const { data: cart } = useGetCartQuery()

  const notLogin = [
    { label: '회원가입', route: 'signup' },
    { label: '로그인', route: 'signin' }
  ]
  const logined = [
    { label: '회원정보 수정', route: 'userdetail' },
    { label: '관심상품', route: 'favorite' },
    { label: '로그아웃', route: 'logout' }
  ]

  const [useLogout, { isLoading }] = useLogoutMutation()
  const userName = useSelector(state => state.user).name
  const navigate = useNavigate()

  const [visible, setVisible] = useState(false)
  const [options, setOptions] = useState(notLogin)

  useEffect(() => {
    if (accessToken && userName) {
      setOptions(logined)
    }
  }, [accessToken])

  const logout = () => {
    useLogout()
    dispatch(logOut())
    setOptions(notLogin)
    navigate('/')
  }

  const refreshLogin = async () => {
    try {
      const user = await refresh().unwrap()
      dispatch(setUser(user))
    } catch (error) {
      navigate('/signin')
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img className={styles.notch} src={iPhone} alt='iphone notch' />
        <div className={styles.navbar}>
          {accessToken ? (
            <button className={styles.refresh} onClick={refreshLogin}>
              로그인 연장
            </button>
          ) : null}
          <Space>
            <Link to='/'>
              <SearchOutline
                style={{
                  fontSize: '20px',
                  color: '#888888',
                  marginTop: '1px',
                  fontWeight: 700
                }}
              />
            </Link>
            <Link to='/cart'>
              <Badge content={cart?.length === 0 ? '' : cart?.length}>
                <ShoppingCartOutlined
                  style={{ fontSize: '22px', color: '#888888' }}
                />
              </Badge>
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
          backgroundColor: 'transparent'
        }}
      >
        <div className={styles.menuContainer}>
          <div className={styles.menuTitle}>
            {accessToken && userName ? (
              <p>
                <span>{userName} 님, 환영합니다.</span>
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
                  onClick={() => {
                    logout()
                    setVisible(false)
                  }}
                >
                  {option.label}
                </div>
              )
            }
            return (
              <div
                key={option.route}
                onClick={() => {
                  setVisible(false)
                }}
              >
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
