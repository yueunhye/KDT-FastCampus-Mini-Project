import React from 'react'
import { Link } from 'react-router-dom'


const NavBottom = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#55A3FF',
        fontSize: '20px',
        height: '65px',
        width: '100vw',
        textAlign: 'center',
      }}
    >
      NavBottom
      <Link to='products'>버튼</Link>
    </div>
  )
}

export default NavBottom
