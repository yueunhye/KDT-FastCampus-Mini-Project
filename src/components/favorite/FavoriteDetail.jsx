import React from 'react'
import style from '../../scss/Favorite.module.scss'
import {
  DollarCircleOutlined,
  CreditCardOutlined,
  BankOutlined,
  FundOutlined
} from '@ant-design/icons'
import { useGetFavoriteQuery } from '../../store/api/favoriteApiSlice'

const FavoriteDetail = () => {
  const { data: favorite, isLoading, isError } = useGetFavoriteQuery()
  console.log(favorite)
  return (
    <section className={style.FavoriteDetail}>
      <div className={style.detailContainer}>
        <div className={style.title}>
          <span>나의 찜 목록</span>
        </div>
        <div className={style.productContainer}>
          <div style={{ display: 'flex' }}>
            <div className={`${style.iconBackground} ${style.icon1}`}>
              <DollarCircleOutlined
                style={{ color: 'white', fontSize: '20px' }}
              />
            </div>
            <span className={style.productTitle}>대출</span>
          </div>
          <div style={{ display: 'flex' }}>
            <div className={`${style.iconBackground} ${style.icon2}`}>
              <CreditCardOutlined style={{ color: 'white', fontSize: '' }} />
            </div>
            <span className={style.productTitle}>카드</span>
          </div>
          <div style={{ display: 'flex' }}>
            <div className={`${style.iconBackground} ${style.icon3}`}>
              <BankOutlined style={{ color: 'white', fontSize: '' }} />
            </div>
            <span className={style.productTitle}>적금</span>
          </div>
          <div style={{ display: 'flex' }}>
            <div className={`${style.iconBackground} ${style.icon4}`}>
              <FundOutlined style={{ color: 'white', fontSize: '' }} />
            </div>
            <span className={style.productTitle}>펀드</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FavoriteDetail
