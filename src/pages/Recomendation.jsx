import React, { useEffect, useState } from 'react'
import RecommendList from '../components/RecommendList'
import { getProduct } from '../utils/getProduct'
import { useGetRecommendQuery } from '../store/api/financeApi'

const userName = [
  {
    id: '1',
    name: '신문수',
    price: '45,500,000원',
  },
]

const Recomendation = () => {
  const [name, setName] = useState(userName)
  const [recommend, setRecommend] = useState([])
  const { data: getRecommend, error, loading } = useGetRecommendQuery()
  console.log('getRecommend???', getRecommend)

  const getProductDust = async () => {
    const { data } = await getProduct()
    setRecommend(data)
  }

  useEffect(() => {
    getProductDust()
  }, [])

  return (
    <div>
      <RecommendList name={name} recommend={recommend} />
    </div>
  )
}

export default Recomendation
