import React, { useState, useEffect, useCallback } from 'react'
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
  const [loan, setLoan] = useState([])
  const [creditCard, setCreditCard] = useState([])
  const [saving, setSaving] = useState([])
  const [fund, setFund] = useState([])

  if (isLoading) return <div>Loading...</div>

  const filterProducts = useCallback(() => {
    if (favorite) {
      setLoan(favorite.filter(item => item.tag === '적금'))
      setCreditCard(favorite.filter(item => item.tag === '카드'))
      setSaving(favorite.filter(item => item.tag === '대출'))
      setFund(favorite.filter(item => item.tag === '펀드'))
    }
  }, [favorite])

  useEffect(() => {
    filterProducts()
  }, [favorite])

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
            <span className={style.productCount}>
              {loan.length !== 0 ? loan.length : ''}
            </span>
          </div>
          <div style={{ display: 'flex' }}>
            <div className={`${style.iconBackground} ${style.icon2}`}>
              <CreditCardOutlined style={{ color: 'white', fontSize: '' }} />
            </div>
            <span className={style.productTitle}>카드</span>
            <span className={style.productCount}>
              {creditCard.length !== 0 ? creditCard.length : ''}
            </span>
          </div>
          <div style={{ display: 'flex' }}>
            <div className={`${style.iconBackground} ${style.icon3}`}>
              <BankOutlined style={{ color: 'white', fontSize: '' }} />
            </div>
            <span className={style.productTitle}>적금</span>
            <span className={style.productCount}>
              {saving.length !== 0 ? saving.length : ''}
            </span>
          </div>
          <div style={{ display: 'flex' }}>
            <div className={`${style.iconBackground} ${style.icon4}`}>
              <FundOutlined style={{ color: 'white', fontSize: '' }} />
            </div>
            <span className={style.productTitle}>펀드</span>
            <span className={style.productCount}>
              {fund.length !== 0 ? fund.length : ''}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FavoriteDetail
