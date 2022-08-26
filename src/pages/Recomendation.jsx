import React, { useState } from 'react'
import RecommendList from '../components/RecommendList'

const userName = [
  {
    id: '1',
    name: '신문수',
    price: '45,500,000원',
  },
]

const RecommendCardData = [
  {
    id: 1,
    description: '개발자들을 위한 신용카드',
    tag: ['카드'],
    tagContent: ['카드', '코딩/개발', '할인'],
    details: [
      '해외겸용 1만원',
      '전월 실적 30만원 이상',
      '스타벅스50% 할인 , 개발서적30% 할인 , CGV10% 할인, 인프런강의10% 할인',
    ],
    photo: 'null',
    companyName: '신한카드',
    productName: '신한카드 Developer Dream',
    price: 'null',
    age: '19~60',
    job: '상관없음',
    realEstate: ['할인'],
    hasCar: '상관없음',
    asset: '상관없음',
    salary: '상관없음',
    interest: '상관없음',
  },
]

const Recomendation = () => {
  const [name, setName] = useState(userName)
  const [recommendCard, setRecommendCard] = useState(RecommendCardData)

  return (
    <div>
      <RecommendList name={name} recommendCard={recommendCard} />
    </div>
  )
}

export default Recomendation
