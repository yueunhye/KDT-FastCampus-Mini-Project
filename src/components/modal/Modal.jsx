import React from 'react'
import style from '~/scss/Search.module.scss'

function Modal(props) {
  const { open, close } = props

  return (
    <div
      className={open ? `${style.OpenModal} ${style.Modal}` : '{style.Modal}'}
    >
      {open ? (
        <section>
          <header>
            자세한 내용 및 추천상품을 받고 싶다면
            <br /> 회원가입 후 이용해 주세요
          </header>
          <footer>
            <p onClick={close}>확인</p>
          </footer>
        </section>
      ) : null}
    </div>
  )
}

export default Modal
