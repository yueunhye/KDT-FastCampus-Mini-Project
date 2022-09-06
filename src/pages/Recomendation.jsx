import React, { useEffect, useState } from 'react'
import RecommendList from '../components/RecommendList'

const userName = [
  {
    id: '1',
    name: '신문수',
    price: '45,500,000원'
  }
]

const Recomendation = () => {
  const [name, setName] = useState(userName)

  return (
    <div>
      <RecommendList name={name} />
    </div>
  )
}

export default Recomendation
