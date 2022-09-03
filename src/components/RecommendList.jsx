import React, { useEffect } from 'react'
import styles from '../scss/Recommend.module.scss'
import RecommedModal from './modal/RecommendModal'
import Card from '../components/Card'
import { useState } from 'react'
import { Tabs, Swiper } from 'antd-mobile'
import { useRef } from 'react'

const tagData = [
  { key: 'loan', title: '대출' },
  { key: 'saving', title: '적금' },
  { key: 'fund', title: '펀드' },
]

const RecommendList = ({ name, recommend }) => {
  const [filterList, setFilterList] = useState([])
  const [filterTag, setFilterTag] = useState('대출')
  const [deList, setDeList] = useState([])
  const [fundList, setFundList] = useState([])
  const [countList, setCountList] = useState([])

  console.log('recommend?', recommend)

  const [activeIndex, setActiveIndex] = useState(1)
  const clickRef = useRef(null)

  const [modal, setModal] = useState(false)
  const modalClose = () => {
    if (modal) {
      setModal()
    } else {
      setModal(!modal)
    }
  }

  // const filterTagHandler = selectedTag => {
  //   setFilterList(() => recommend.filter(item => item?.tag === selectedTag))
  //   console.log('filterList', filterList)
  // }

  useEffect(() => {
    if (recommend !== []) {
      setDeList(recommend.filter(item => item.tag[0] === '대출'))
      setFundList(recommend.filter(item => item.tag[0] === '펀드'))
      setCountList(recommend.filter(item => item.tag === '적금'))
    }

    // switch () {
    //   case '대출':
    //     setDeList([...deList, item])
    //     break
    //   case '펀드':
    //     setFundList([...fundList, item])
    //     break
    //   case '적금':
    //     setCountList([...countList, item])
    //     break
    //   default:
    //     break
    // }
  }, [recommend])

  console.log('왓어?', deList, fundList, countList)

  return (
    <div className={styles.recommend}>
      <div className={styles.content}>
        <div className={styles.contentTop}>
          {name.map(user => (
            <h2 key={user.id}>hello :) {user.name} 회원님</h2>
          ))}
          <p>회원님에 맞춤형 금융상품을 소개드립니다.</p>
        </div>
        <div className={styles.contentMiddle}>
          {name.map(user => (
            <h2 key={user.id}>{user.price}</h2>
          ))}
          <p>회원님의 신청 가능한 대출금 현황.</p>
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
            <div onClick={modalClose}>
              {deList.map(item => (
                <Card productData={item} key={item.title} />
              ))}
            </div>
          </Swiper.Item>
          <Swiper.Item>
            <div onClick={modalClose}>
              {countList.map(item => (
                <Card productData={item} key={item.title} />
              ))}
            </div>
          </Swiper.Item>
          <Swiper.Item>
            <div onClick={modalClose}>
              {fundList.map(item => (
                <Card productData={item} key={item.title} />
              ))}
            </div>
          </Swiper.Item>
        </Swiper>
      </div>

      <div>{modal && <RecommedModal modalClose={modalClose} />}</div>
    </div>
  )
}

export default RecommendList
