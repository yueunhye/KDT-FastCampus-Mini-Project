import React, { useEffect, useState } from 'react'
import { getProduct } from '../utils/getProduct'
import Detail from '../components/Detail'

const DetailProduct = () => {
  const [detail, setDetail] = useState([])

  const getDetail = async () => {
    const { data } = await getProduct()
    setDetail(data)
  }

  useEffect(() => {
    getDetail()
  }, [])

  return (
    <div>
      <Detail data={detail} />
    </div>
  )
}

export default DetailProduct
