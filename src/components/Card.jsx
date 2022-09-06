import React from 'react'

import style from '~/scss/Search.module.scss'
import { StarOutlined, StarFilled, SwapRightOutlined } from '@ant-design/icons'

// import { addFavorite, removeFavorite } from '~/store/slices/favoriteSlice'

const Card = ({ productData, openModal }) => {
  // const isFavorite = favorite?.some(
  //   item => item.productName === productData.productName,
  // )

  // const dispatch = useDispatch()

  // const onStarClick = product => {
  //   console.log(isFavorite)
  //   isFavorite
  //     ? dispatch(removeFavorite(product))
  //     : dispatch(addFavorite(product))
  //   console.log(favorite)
  // }

  return (
    <div className={style.Card}>
      <h5>
        <img src={productData?.logo}></img>
      </h5>
      <h2>
        {productData?.companyName}
        <button id={style.favStar} onClick={() => onStarClick(productData)}>
          {/* {isFavorite ? (
            <StarFilled style={{ fontSize: '20px' }} />
            ) : (
              <StarOutlined style={{ fontSize: '20px' }} />
            )} */}
        </button>
      </h2>
      <h3>{productData?.productName}</h3>
      <h4>{productData?.description}</h4>
      <p onClick={openModal}>
        신청하기
        <SwapRightOutlined />
      </p>
    </div>
  )
}

export default Card
