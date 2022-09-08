import React, { useState } from 'react'
import Modal from '~/components/modal/Modal'
import style from '~/scss/Search.module.scss'
import Card from './Card'
import { getCookie } from '../utils/cookie'
import {
  useGetProductsQuery,
  useGetSearchMutation
} from '~/store/api/searchApiSlice'
import { FilterOutline, RightOutline, SearchOutline } from 'antd-mobile-icons'
import { useSelector } from 'react-redux'
import RecommedModal from './modal/RecommendModal'
import { useSetDetailProductMutation } from '../store/api/recommendApi'

function Search() {
  const [visible, setVisible] = useState(false)
  const tags = ['대출', '펀드', '카드', '멤버십', '적금']
  const tagContents = ['청년', '재테크', '코로나', '문화', '담보']
  const [checkedTag, setCheckedTag] = useState([])
  const [checkedTagContent, setCheckedTagContent] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [isClicked, setIsClicked] = useState(false)
  const modalTest = useSelector(state => state.user).modalVisible
  const accessToken = getCookie('accessToken')
  const data = {
    query: searchInput,
    tag: checkedTag,
    tagContent: checkedTagContent
  }
  const [detail, { data: getDetail }] = useSetDetailProductMutation()

  const [search, { data: getSearch }] = useGetSearchMutation()
  const { data: products, isLoading, isError } = useGetProductsQuery()

  const asyncUpFetch = () => {
    setIsClicked(true)
    search(data)
  }
  const handlerKeyPress = e => {
    if (e.key === 'Enter') {
      asyncUpFetch()
    }
  }
  return (
    <section>
      <h1>상품을 검색해주세요</h1>
      <div className={style.searchContainer}>
        <div className={style.search} onKeyPress={handlerKeyPress}>
          <input
            placeholder='Search...'
            onChange={event => setSearchInput(event.target.value)}
          />
          <SearchOutline
            fontSize={20}
            className={style.searchBtn}
            onClick={asyncUpFetch}
          />
        </div>
        <div>
          <FilterOutline
            fontSize={25}
            className={style.filterBtn}
            onClick={() => setVisible(visible => !visible)}
          />
        </div>
      </div>
      {visible ? (
        <div className={style.ButtonGroup}>
          <div>
            {tags.map(item => (
              <button
                key={item}
                onClick={() => {
                  !checkedTag.includes(item)
                    ? setCheckedTag(checkedTag => [...checkedTag, item])
                    : setCheckedTag(
                        checkedTag.filter(button => button !== item)
                      )
                }}
                className={
                  checkedTag.includes(item) ? `${style.On}` : `${style.Off}`
                }
              >
                {item}
              </button>
            ))}
          </div>
          <div>
            {tagContents.map(item => (
              <button
                key={item}
                onClick={() => {
                  !checkedTagContent.includes(item)
                    ? setCheckedTagContent(checkedTagContent => [
                        ...checkedTagContent,
                        item
                      ])
                    : setCheckedTagContent(
                        checkedTagContent.filter(button => button !== item)
                      )
                }}
                className={
                  checkedTagContent.includes(item)
                    ? `${style.On}`
                    : `${style.Off}`
                }
              >
                {item}
              </button>
            ))}
          </div>
          <button className={style.resultBtn} onClick={asyncUpFetch}>
            필터링된 결과 보기
            <RightOutline />
          </button>
        </div>
      ) : null}
      {isLoading ? (
        <div>로딩...</div>
      ) : isError ? (
        <div>에러발생</div>
      ) : isClicked === false ? (
        products?.map(product => (
          <div
            onClick={() => {
              detail(product.id)
            }}
          >
            <Card key={product.id} productData={product} />
          </div>
        ))
      ) : (
        getSearch &&
        getSearch.map(product => (
          <div
            onClick={() => {
              detail(product.id)
            }}
          >
            <Card key={product.id} productData={product} />
          </div>
        ))
      )}
      {/* // 로그인 했을시 */}
      {modalTest && accessToken ? (
        <RecommedModal getDetail={getDetail} />
      ) : null}
      {/* // 로그인 안했을시 */}
      {modalTest && (Boolean(!accessToken) || accessToken === 'undefinded') ? (
        <Modal />
      ) : null}
    </section>
  )
}

export default Search
