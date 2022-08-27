import React, { useState } from 'react'
import '~/scss/Alert.scss'

function Alert({ title, detail, confirm }) {
  const [close, setClose] = useState('block')

  return (
    <div style={{ display: close }}>
      <div className='mask'>
        <div className='alertbox'>
          <div className='content'>
            <span className='title'>{title}</span>
            <span className='detail'>{detail}</span>
          </div>
          <div
            className='confirm'
            onClick={() => {
              setClose('none')
            }}
          >
            <span>{confirm}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alert
