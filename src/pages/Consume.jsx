import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { getProduct } from '../utils/getProduct'
import styles from '../scss/Consume.module.scss'
import { Tabs, Swiper } from 'antd-mobile'
import { useRef } from 'react'
import RecommedModal from '../components/modal/RecommendModal'
import { useSetMenberShipQuery } from '../store/api/recommendApi'

const tagData = [
  { key: 'card', title: '카드' },
  { key: 'membership', title: '맴버십' }
]

const Consume = () => {
  const [userName, setUserName] = useState([{ id: 1, title: '신문수' }])
  const [card, setCard] = useState([])
  const [memBerShip, setMemBerShip] = useState([])
  const [activeIndex, setActiveIndex] = useState(1)
  const { data: membership, isError, isLoading } = useSetMenberShipQuery()

  console.log('멤버십', membership)

  const conSumRef = useRef(null)
  const [modal, setModal] = useState(false)

  const modalClose = () => {
    if (modal) {
      setModal()
    } else {
      setModal(!modal)
    }
  }

  useEffect(() => {
    if (membership) {
      setCard(membership.data.cards)
      setMemBerShip(membership.data.memberships)
    }
  }, [membership])

  return (
    <>
      <div className={styles.consumeContent}>
        <div className={styles.consumeText}>
          {userName.map((name, idx) => (
            <h3 key={idx}>{name.title}</h3>
          ))}
          <p>
            회원님에 현명한 소비를 위한
            <br />
            맞춤형 카드와 멤버십 상품을 추천 드립니다.
          </p>
        </div>

        <div className={styles.tabsBox}>
          <div className={styles.tabs}>
            <Tabs
              activeKey={tagData[activeIndex].key}
              onChange={key => {
                const index = tagData.findIndex(item => item.key === key)
                conSumRef.current?.swipeTo(index)
                setActiveIndex(index)
              }}
            >
              {tagData.map(tag => (
                <Tabs.Tab title={tag.title} key={tag.key} />
              ))}
            </Tabs>
          </div>
        </div>

        <div className={styles.swiper}>
          <Swiper
            indicator={() => null}
            ref={conSumRef}
            defaultIndex={activeIndex}
            onIndexChange={index => {
              setActiveIndex(index)
            }}
          >
            <Swiper.Item>
              <div onClick={modalClose}>
                {card.map((item, idx) => (
                  <Card productData={item} key={idx} />
                ))}
              </div>
            </Swiper.Item>
            <Swiper.Item>
              <div onClick={modalClose}>
                {memBerShip.map((item, idx) => (
                  <Card productData={item} key={idx} />
                ))}
              </div>
            </Swiper.Item>
          </Swiper>
        </div>
      </div>
      <div>{modal && <RecommedModal modalClose={modalClose} />}</div>
    </>
  )
}

export default Consume
