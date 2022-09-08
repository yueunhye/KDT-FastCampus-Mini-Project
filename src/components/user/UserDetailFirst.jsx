import { DoubleRightOutlined } from '@ant-design/icons'
import { Radio, Space } from 'antd-mobile'
import React, { useState } from 'react'
import { jobs, houses, assets, pay, interests } from '~/data/userDetails'
import styles from '~/scss/UserDetailFirst.module.scss'
import Alert from '~/components/modal/Alert'
import { Link, useNavigate } from 'react-router-dom'
import {
  useDetailPassMutation,
  useUserDetailMutation
} from '../../store/api/userApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../store/slices/userSlice'

function UserDetailFirst() {
  const [birth, setBirth] = useState('')
  const [age, setAge] = useState('19~34')
  const [job, setJob] = useState('회사원')
  const [realEstate, setRealEstate] = useState('없음')
  const [car, setCar] = useState('')
  const [asset, setAsset] = useState('1억 미만')
  const [salary, setSalary] = useState('~2천만')
  const [agree, setAgree] = useState(false)
  const [over14, setOver14] = useState(false)
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [interest, setInterest] = useState([])
  const [submitUserDetail, { isLoading }] = useUserDetailMutation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const [detailPass, { isError }] = useDetailPassMutation()

  const changeButton = (tag, event) => {
    if (interest.includes(tag)) {
      setInterest(interest.filter(item => item !== tag))
      event.target.style.backgroundColor = '#a6cfff'
    } else {
      setInterest([...interest, tag])
      event.target.style.backgroundColor = '#55a3ff'
    }
  }

  const submit = async () => {
    if (birth === '' || car === '') {
      console.log('birth or car')
      dispatch(openModal(true))
      return
    }

    if (!agree || !over14) {
      console.log('agree or over14')
      dispatch(openModal(true))
      return
    }

    const justAge = new Date().getFullYear() - Number(birth.substring(0, 4))

    if (justAge < 35) {
      setAge(data => (data = '19~34'))
    } else if (35 <= justAge < 60) {
      console.log(justAge)
      setAge(data => (data = '35~60'))
    } else {
      setAge(data => (data = '60~'))
    }

    const data = { age, job, realEstate, car, asset, salary, interest }

    try {
      await submitUserDetail(data)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className={styles.firstAsk}>
        <Link to='/' className={styles.passbtn} onClick={detailPass}>
          <div className={styles.nextSet}>다음에 설정하기</div>
          <DoubleRightOutlined style={{ color: '#888888' }} />
        </Link>
        <div className={styles.title}>{user.name} 님에 대해 알고 싶어요!</div>
        <div className={styles.subTitle}>
          (다양한 서비스를 제공해드리기 위한 필수 정보수집 입니다.)
        </div>
        <div className={styles.container}>
          <div className={styles.question}>
            <div className={styles.label}>
              <span>생일</span>은 언제이신가요?
            </div>
            <input
              className={styles.input}
              value={birth}
              onChange={e => setBirth(e.target.value)}
              type='number'
              placeholder='생년월일 8자리를 입력해주세요.'
            />
          </div>
          <div className={styles.question}>
            <div className={styles.label}>
              현재 <span>직업</span>은 무엇인가요?
            </div>
            <select
              className={styles.select}
              value={job}
              name='job'
              onChange={e => setJob(e.target.value)}
            >
              {jobs.map(job => {
                return (
                  <option value={job} key={job}>
                    {job}
                  </option>
                )
              })}
            </select>
          </div>
          <div className={styles.question}>
            <div className={styles.label}>
              현재 보유하신 <span>부동산</span>이 있으신가요?
            </div>
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
          </div>
          <div className={styles.question}>
            <div className={styles.label}>
              <span>자동차</span>가 있으신가요?
            </div>
            <Radio.Group
              value={car}
              onChange={v => setCar(v)}
              className={styles.radio}
            >
              <Space>
                <Radio
                  value='있음'
                  style={{
                    '--icon-size': '18px',
                    '--font-size': '13px',
                    '--gap': '6px',
                    backgroundColor: '#fff',
                    fontFamily: 'sans-serif'
                  }}
                >
                  예
                </Radio>
                <Radio
                  value='없음'
                  style={{
                    '--icon-size': '18px',
                    '--font-size': '13px',
                    '--gap': '6px',
                    fontFamily: 'sans-serif'
                  }}
                >
                  아니요
                </Radio>
              </Space>
            </Radio.Group>
          </div>
          <div className={styles.question}>
            <div className={styles.label}>
              현재 <span>자산</span>의 규모는 어느정도 인가요?
            </div>
            <select
              className={styles.select}
              value={asset}
              name='house'
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
          </div>
          <div className={styles.question}>
            <div className={styles.label}>
              현재 <span>연수입</span>은 어느정도 되나요?
            </div>
            <select
              className={styles.select}
              value={salary}
              name='house'
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
          <div className={styles.question}>
            <div className={styles.label}>
              <span>흥미/관심사</span>가 궁금해요!
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
                        interest.includes(tag)
                          ? `${styles.On}`
                          : `${styles.Off}`
                      }
                    />
                  )
                })}
              </div>
            </div>
          </div>
          <div className={styles.lastCheck} style={{ marginTop: '10px' }}>
            <label className={styles.checkboxLabel} htmlFor='agree'>
              만 19세 이상입니다.
            </label>
            <input
              className={styles.checkbox}
              type='checkbox'
              name='agree'
              value={over14}
              onChange={e => setOver14(e.target.checked)}
            />
          </div>
          <div className={styles.lastCheck}>
            <label className={styles.checkboxLabel} htmlFor='agree'>
              개인정보 수집 및 활용에 동의합니다.
            </label>
            <input
              className={styles.checkbox}
              type='checkbox'
              name='agree'
              value={agree}
              onChange={e => {
                setAgree(e.target.checked)
              }}
            />
          </div>
          <button onClick={submit} className={styles.btn}>
            Shall We?
          </button>
        </div>
      </div>
      {user.modalVisible && visible1 ? (
        <Alert
          title={'모든 항목 기입 확인'}
          detail={'모든 항목에 답변 하셔야 합니다.'}
          confirm={'확인'}
        />
      ) : null}
      {user.modalVisible && visible2 ? (
        <Alert
          title={'SHARE WE'}
          detail={'이용약관에 동의하세요.'}
          confirm={'확인'}
        />
      ) : null}
    </div>
  )
}

export default UserDetailFirst
