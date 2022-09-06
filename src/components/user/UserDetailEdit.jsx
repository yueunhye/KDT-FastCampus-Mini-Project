import React, { useState } from 'react'
import { Radio, Space } from 'antd-mobile'
import { LeftOutline } from 'antd-mobile-icons'
import { jobs, houses, assets, pay, interests } from '~/data/userDetails'
import styles from '~/scss/UserDetailEdit.module.scss'
import { useNavigate } from 'react-router-dom'
import {
  useEditUserDataMutation,
  useInquireUserDataQuery
} from '../../store/api/userApiSlice'
import { useEffect } from 'react'

function UserDetailEdit() {
  const navigate = useNavigate()
  const { data: userDetail, isError, isFetching } = useInquireUserDataQuery()
  const [job, setJob] = useState('회사원')
  const [realEstate, setRealEstate] = useState('없음')
  const [car, setCar] = useState('')
  const [asset, setAsset] = useState('1억 미만')
  const [salary, setSalary] = useState('~2천만')
  const [interest, setInterest] = useState([])
  const [changeData, setChangeData] = useState({})
  const [submitEdit, { _ }] = useEditUserDataMutation()

  const changeButton = (tag, event) => {
    if (interest.includes(tag)) {
      setInterest(interest.filter(item => item !== tag))
      event.target.style.backgroundColor = '#a6cfff'
    } else {
      setInterest([...interest, tag])
      event.target.style.backgroundColor = '#55a3ff'
    }
  }

  useEffect(() => {
    setChangeData({ job, realEstate, car, asset, salary, interest })
  }, [job, realEstate, car, asset, salary, interest])

  const submit = async () => {
    await submitEdit(changeData)
    navigate('/')
  }
  return (
    <div>
      <div className={styles.userEdit}>
        <div className={styles.header}>
          <LeftOutline
            fontSize={18}
            onClick={() => navigate(-1)}
            style={{ position: 'absolute', left: '18px' }}
          />
          <div className={styles.title}>회원정보 수정</div>
        </div>
        <div className={styles.subTitle}>
          (변경을 원하지 않는 항목은 빈칸으로 두세요.)
        </div>
        <div className={styles.listContainer}>
          <div className={styles.labels}>
            <label htmlFor='password'>새 비밀번호</label>
            <label htmlFor='job'>직업</label>
            <label htmlFor='house'>부동산</label>
            <label>자동차</label>
            <label htmlFor='asset'>자산</label>
            <label htmlFor='salry'>연수입(연봉)</label>
            <label>흥미/관심분야</label>
          </div>
          <div className={styles.writeField}>
            <input
              type='password'
              name='password'
              placeholder='미변경시, 빈칸으로 두세요.'
              className={styles.input}
            />
            <select
              className={styles.select}
              value={job}
              name='job'
              onChange={e => setJob(e.target.value)}
            >
              {jobs.map(item => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                )
              })}
            </select>
            <select
              className={styles.select}
              value={realEstate}
              name='house'
              onChange={e => setRealEstate(e.target.value)}
            >
              {houses.map(house => {
                return (
                  <option value={house} key={house}>
                    {house}
                  </option>
                )
              })}
            </select>
            <Radio.Group value={car} onChange={v => setCar(v)}>
              <Space>
                <Radio
                  value='있음'
                  style={{
                    '--icon-size': '18px',
                    '--font-size': '14px',
                    '--gap': '6px',
                    backgroundColor: '#fff',
                    borderRadius: '9px',
                    fontFamily: 'sans-serif',
                    margin: '9px 0'
                  }}
                >
                  유
                </Radio>
                <Radio
                  value='없음'
                  style={{
                    '--icon-size': '18px',
                    '--font-size': '14px',
                    '--gap': '6px',
                    fontFamily: 'sans-serif',
                    margin: '9px 0'
                  }}
                >
                  무
                </Radio>
              </Space>
            </Radio.Group>
            <select
              className={styles.select}
              value={asset}
              name='asset'
              onChange={e => setAsset(e.target.value)}
            >
              {assets.map(item => {
                return (
                  <option value={item.value} key={item.value}>
                    {item.label}
                  </option>
                )
              })}
            </select>
            <select
              className={styles.select}
              value={salary}
              name='salary'
              onChange={e => setSalary(e.target.value)}
            >
              {pay.map(item => {
                return (
                  <option value={item.value} key={item.value}>
                    {item.label}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
        <div>
          <div className={styles.ButtonGroup}>
            {interests.map(tag => {
              return (
                <input
                  type='button'
                  key={tag}
                  value={tag}
                  onClick={e => changeButton(tag, e)}
                  className={
                    interest.includes(tag) ? `${styles.On}` : `${styles.Off}`
                  }
                />
              )
            })}
          </div>
        </div>
        <div className={styles.btnContainer}>
          <button onClick={submit} className={styles.btn}>
            수정하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserDetailEdit
