import React from 'react'
import chart from '../../../public/assets/chart3.png'
import Frame from '../../../public/assets/Frame.png'
import Group from '../../../public/assets/chart3.png'
import MaskG from '../../../public/assets/Mask-group.png'
import styles from '~/scss/UserDetailBG.module.scss'

function UserDetailBG() {
  return (
    <div className={styles.decoration}>
      <div className={styles.backdropFilter}></div>
      <div className={styles.container}>
        <img className={styles.frame} src={Frame} alt='frame' />
        <img className={styles.maskG} src={MaskG} alt='screen' />
        <img className={styles.chart} src={chart} alt='chart' />
      </div>
    </div>
  )
}

export default UserDetailBG
