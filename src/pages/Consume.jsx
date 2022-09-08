import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import styles from '../scss/Consume.module.scss'
import { Tabs, Swiper, Skeleton } from 'antd-mobile'
import { useRef } from 'react'
import RecommedModal from '../components/modal/RecommendModal'
import { useSetMenberShipQuery } from '../store/api/recommendApi'
import { useSetDetailProductMutation } from '../store/api/recommendApi'
import { useSelector } from 'react-redux'

const tagData = [
  { key: 'card', title: '카드' },
  { key: 'membership', title: '멤버십' }
]

const Consume = () => {
  const [card, setCard] = useState([])
  const [memBerShip, setMemBerShip] = useState([])
  const [activeIndex, setActiveIndex] = useState(1)
  const conSumRef = useRef(null)
  const [detail, { data: getDetail }] = useSetDetailProductMutation()
  const { data: membership, isError } = useSetMenberShipQuery()
  const guLinModal = useSelector(state => state.user).modalVisible
  const getName = useSelector(state => state.user).name
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  console.log('멤버십', membership)
  console.log('get??', getDetail)

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
          <h3>{getName}</h3>
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
              <div>
                {card?.map((item, idx) => (
                  <div
                    onClick={() => {
                      detail(item.id)
                    }}
                  >
                    {isLoading ? (
                      <Skeleton animated className={styles.Skeleton}></Skeleton>
                    ) : (
                      <Card productData={item} key={item.id} />
                    )}
                  </div>
                ))}
              </div>
            </Swiper.Item>
            <Swiper.Item>
              <div>
                {memBerShip?.map((item, idx) => (
                  <div
                    onClick={() => {
                      detail(item.id)
                    }}
                  >
                    {isLoading ? (
                      <Skeleton animated className={styles.Skeleton}></Skeleton>
                    ) : (
                      <Card productData={item} key={item.id} />
                    )}
                  </div>
                ))}
              </div>
            </Swiper.Item>
          </Swiper>
        </div>
      </div>
      {guLinModal ? <RecommedModal getDetail={getDetail} /> : null}
    </>
  )
}

export default Consume
