import {
  LockOutline,
  MailOutline,
  UserOutline,
  PhonebookOutline
} from 'antd-mobile-icons'
import React, { useEffect, useState } from 'react'
import styles from '~/scss/SignUpPage.module.scss'
import { Link } from 'react-router-dom'
import Alert from '../modal/Alert'
import Decoration from '../deco/Decoration'
import { useSignUpMutation } from '../../store/slices/userApiSlice'
import { useSelector } from 'react-redux'
import userSlice from '../../store/slices/userSlice'

function SignUpPage() {
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [email, setEmail] = useState('naver.com')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [direct, setDirect] = useState(true)
  const [alert, setAlert] = useState(false)
  const [submitSignUp, { isLoadgin }] = useSignUpMutation()
  const isOpen = useSelector(state => userSlice.modalVisible)

  useEffect(() => {
    if (email === '') {
      setDirect(false)
    } else {
      setDirect(true)
    }
  }, [email])

  const signUp = async () => {
    if (!name || !id || !password || !phone) {
      dispatch(openModal(true))
      console.log(isOpen)
      return
    }
    const data = {
      name,
      email: id + '@' + email,
      password,
      phoneNumber: phone
    }

    try {
      await submitSignUp(data)
      setName('')
      setId('')
      setEmail('naver.com')
      setPassword('')
      setPhone('')
      navigate('/signin')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.signUp}>
      <Decoration />
      <div className={styles.container}>
        <div className={styles.title}>
          <p>나를 위한</p>
          <p>모두를 위한</p>
          <p>더 나은 내일을 향해</p>
          <p>
            오늘부터 <span>SHARE WE?</span>
          </p>
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.input}>
            <label htmlFor='name'>
              <UserOutline />
            </label>
            <input
              name='name'
              type='text'
              placeholder='이름'
              value={name}
              onChange={e => {
                setName(e.target.value)
              }}
            />
          </div>
          <div className={styles.email}>
            <label htmlFor='email'>
              <MailOutline />
            </label>
            <input
              name='email'
              type='email'
              placeholder='이메일'
              value={id}
              onChange={e => {
                setId(e.target.value)
              }}
            />
            <p> @ </p>
            <input
              name='email'
              type='email'
              value={email}
              disabled={direct}
              onChange={e => {
                setEmail(e.target.value)
              }}
            />
            <select
              className={styles.select}
              onChange={e => {
                setEmail(e.target.value)
              }}
              value={email}
            >
              <option value='gmail.com'>gmail</option>
              <option value='naver.com'>naver</option>
              <option value='nate.com'>nate</option>
              <option value='kakao.com'>kakao</option>
              <option value=''>직접입력</option>
            </select>
          </div>
          <div className={styles.input}>
            <label htmlFor='password'>
              <LockOutline />
            </label>
            <input
              name='password'
              type='password'
              placeholder='비밀번호 8자리 이상'
              value={password}
              onChange={e => {
                setPassword(e.target.value)
              }}
            />
          </div>
          <div className={styles.input}>
            <label htmlFor='phone'>
              <PhonebookOutline />
            </label>
            <input
              name='phone'
              type='phone'
              placeholder={`'-' 구분없이 입력`}
              value={phone}
              pattern='\d*'
              onChange={e => {
                setPhone(e.target.value)
              }}
            />
          </div>
        </div>
        <button className={styles.btn} onClick={signUp}>
          가입하기
        </button>
        <p className={styles.gologin}>이미 회원이시라면?</p>
        <Link to='/signin' className={styles.loginbtn}>
          <span>로그인하러 Go!</span>
        </Link>
      </div>
      {isOpen ? (
        <Alert
          title={'회원가입 실패'}
          detail={'정보를 모두 입력했는지 확인해주세요.'}
          confirm={'확인'}
          open={alert}
        />
      ) : null}
    </div>
  )
}

export default SignUpPage
