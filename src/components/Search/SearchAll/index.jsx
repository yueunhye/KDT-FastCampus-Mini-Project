import React,{useState} from 'react'
import Modal from '../../Modal'
import style from '../../../scss/Search.module.scss'


function SearchAll() {
  
  const [isClick, setIsClick] = useState(false)
  const [modal, setModal] = useState(false)
  const toogleButton = () => {
    setIsClick(isClick => !isClick)
  }
  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }
  const changeButton = isClick ? `${style.On}` : `${style.Off}`

  return (
    <section>
      {/* SearchAll */}
      <h1>상품을 검색해주세요</h1>
      <div className={style.Button}>
      <button onClick={toogleButton} className={changeButton}>버튼</button>
      <button onClick={toogleButton} className={changeButton}>버튼</button>
      <button onClick={toogleButton} className={changeButton}>버튼</button>
      <button onClick={toogleButton} className={changeButton}>버튼</button>
      <button onClick={toogleButton} className={changeButton}>버튼</button>
      <button onClick={toogleButton} className={changeButton}>버튼</button>
      <button onClick={toogleButton} className={changeButton}>버튼</button>
      <button onClick={toogleButton} className={changeButton}>버튼</button>
      <button onClick={toogleButton} className={changeButton}>버튼</button>
      <button onClick={toogleButton} className={changeButton}>버튼</button>
      {/* <button onClick={()=> toogleButton()} style={{backgroundColor:changeColor()}}>버튼</button> */}
      
      </div>

      <span className={style.Search}><input placeholder='Search...' /></span>

      <div className={`${style.Card} ${style.orange}`} onClick={openModal}>
        <h2>productName</h2>
        <h3>description</h3>
        <p>details</p>
        <p>details</p>
        <p>details</p>
      </div>

      <div className={`${style.Card} ${style.green}`} onClick={openModal}>
        <h2>productName</h2>
        <h3>description</h3>
        <p>details</p>
        <p>details</p>
        <p>details</p>
      </div>
      <Modal open={modal} close={closeModal} />
    </section>
  )
}

export default SearchAll