import React, { useEffect } from 'react'
import styles from '../scss/Recommend.module.scss'
import RecommedModal from './modal/RecommendModal'
import Card from '../components/Card'
import { useState } from 'react'
import { Tabs, Swiper } from 'antd-mobile'
import { useRef } from 'react'
import { useSetRecommendQuery } from '../store/api/recommendApi'
import { useSelector } from 'react-redux'
const tagData = [
  { key: 'loan', title: '대출' },
  { key: 'saving', title: '적금' },
  { key: 'fund', title: '펀드' }
]

const RecommendList = () => {
  const [deList, setDeList] = useState([])
  const [fundList, setFundList] = useState([])
  const [countList, setCountList] = useState([])
  const [activeIndex, setActiveIndex] = useState(1)
  const clickRef = useRef(null)
  const { data: recommend, error, loading } = useSetRecommendQuery()
  const guLinModal = useSelector(state => state.user).modalVisible

  const getName = useSelector(state => state.user).name

  useEffect(() => {
    if (recommend) {
      setDeList(recommend.data.loan)
      setFundList(recommend.data.fund)
      setCountList(recommend.data.saving)
    }
  }, [recommend])

  return (
    <div className={styles.recommend}>
      <div className={styles.content}>
        <div className={styles.contentTop}>
          <h2>{getName}</h2>
          <p>회원님에 맞춤형 금융상품을 소개드립니다.</p>
        </div>
      </div>
      <div className={styles.tabsBox}>
        <div className={styles.tabs}>
          <Tabs
            activeKey={tagData[activeIndex].key}
            onChange={key => {
              const index = tagData.findIndex(item => item.key === key)
              clickRef.current?.swipeTo(index)
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
          ref={clickRef}
          defaultIndex={activeIndex}
          onIndexChange={index => {
            setActiveIndex(index)
          }}
        >
          <Swiper.Item>
            <div>
              {deList.map((item, idx) => (
                <div>
                  <Card productData={item} key={idx} />
                </div>
              ))}
            </div>
          </Swiper.Item>
          <Swiper.Item>
            <div>
              {countList.map((item, idx) => (
                <div>
                  <Card productData={item} key={idx} />
                </div>
              ))}
            </div>
          </Swiper.Item>
          <Swiper.Item>
            <div>
              {fundList.map((item, idx) => (
                <div>
                  <Card productData={item} key={idx} />
                </div>
              ))}
            </div>
          </Swiper.Item>
        </Swiper>
      </div>

      {guLinModal ? <RecommedModal /> : null}
    </div>
  )
}

export default RecommendList
