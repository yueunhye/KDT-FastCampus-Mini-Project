import React, { useState } from 'react'
import '~/scss/Alert.scss'

function Alert({ title, detail, confirm, open }) {
  const [visible, setVisible] = useState(open)

  return (
    <div>
      {visible ? (
        <div
          className='mask'
          onClick={() => {
            setVisible(false)
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
                setVisible(false)
              }}
            >
              <span>{confirm}</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Alert
