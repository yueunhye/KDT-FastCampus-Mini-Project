// import React, { useRef } from 'react'
// import styles from '../scss/DetailCard.module.scss'
// import { useState } from 'react'
// import { HeartOutline } from 'antd-mobile-icons'
// import { Dropdown } from 'antd-mobile'

// const Detail = ({ data }) => {
//   console.log('detail', data)

//   const [isLiked, setIsLiked] = useState(false)

//   return (
//     <div className={styles.DetailCard}>
//       {data.slice(0, 1).map(card => (
//         <div
//           key={card.id}
//           className={`${
//             card.tag === '적금'
//               ? `${styles.DetailContainer} ${styles.orange}`
//               : card.tag[0] === '대출'
//               ? `${styles.DetailContainer} ${styles.blue}`
//               : card.tag[0] === '카드'
//               ? `${styles.DetailContainer} ${styles.green}`
//               : card.tag[0] === '펀드'
//               ? `${styles.DetailContainer} ${styles.pink}`
//               : `${styles.DetailContainer} ${styles.red}`
//           } `}
//         >
//           <div>
//             <h2>{card.tag}</h2>
//             <div className={styles.Heart}>
//               {isLiked ? <HeartFill /> : <HeartOutline />}
//             </div>
//             <h3>
//               {card.photo} {card.companyName}
//             </h3>
//             <h4>{card.productName}</h4>
//             <h5>{card.description}</h5>
//           </div>
//         </div>
//       ))}

//       <div>
//         <Dropdown>
//           <Dropdown.Item
//             key='sorter'
//             title='자세히 보기'
//             className={styles.title}
//           >
//             <div>디테일 정보들</div>
//           </Dropdown.Item>
//         </Dropdown>
//       </div>
//     </div>
//   )
// }

// export default Detail
