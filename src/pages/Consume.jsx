import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Consume = () => {
  const getData = async () => {
    const { data } = await axios.get(
      'https://mini-project-919dd.asia-southeast1.firebasedatabase.app/.json',
    )
    console.log(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return <div>consume</div>
}

export default Consume
