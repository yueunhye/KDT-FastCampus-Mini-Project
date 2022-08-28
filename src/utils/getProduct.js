import axios from 'axios'

export const getProduct = async () => {
  try {
    const { data } = await axios.get(
      'https://mini-project-919dd.asia-southeast1.firebasedatabase.app/.json',
    )
    return data
  } catch (err) {
    console.log(err)
  }
}
