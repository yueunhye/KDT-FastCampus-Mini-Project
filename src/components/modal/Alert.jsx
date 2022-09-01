import React, { useState } from 'react'
import '~/scss/Alert.scss'

function Alert({ title, detail, confirm }) {
  const [close, setClose] = useState(false)

  return (
    <div>
      {close ? (
        ''
      ) : (
        <div
          className='mask'
          onClick={() => {
            setClose('none')
          }}
        >
          <div className='alertbox'>
            <div className='content'>
              <span className='title'>{title}</span>
              <span className='detail'>{detail}</span>
            </div>
            <div
              className='confirm'
              onClick={() => {
                setClose(true)
              }}
            >
              <span>{confirm}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Alert
