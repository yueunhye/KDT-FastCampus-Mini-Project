import React from 'react'
import style from '~/scss/Search.module.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { openModal } from '../../store/slices/userSlice'


function Modal() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className={style.Modal} >
      <section>
        <header>
          자세한 내용 및 추천상품을 받고 싶다면
          <br /> 회원가입 후 이용해 주세요
        </header>
        <footer>
          <div onClick={() => {
            dispatch(openModal(false))
            navigate('/signin')
          }
          }>확인</div> 
        </footer>
      </section>
    </div>
  )
}

export default Modal
