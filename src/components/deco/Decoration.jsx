import React from 'react'
import cards from '../../../public/assets/cards.png'
import box from '../../../public/assets/box.png'
import styles from '~/scss/Decoration.module.scss'

function Decoration() {
  return (
    <div className={styles.decoration}>
      <div className={styles.container}>
        <div className={styles.circle}></div>
        <img className={styles.cards} src={cards} alt='card' />
        <img className={styles.box} src={box} alt='card' />
      </div>
    </div>
  )
}

export default Decoration
