import { LockOutline, MailOutline } from 'antd-mobile-icons'
import React, { useState } from 'react'
import styles from '~/scss/SignIn.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import Alert from '../modal/Alert'
import Decoration from '../deco/Decoration'
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from '../../store/slices/userApiSlice'
import { openModal, setUser } from '../../store/slices/userSlice'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isOpen = useSelector(state => state.user).modalVisible

  const signIn = async () => {
    if (!email || !password) {
      dispatch(openModal(true))
      console.log('안열림 ', isOpen)
      return
    }
    const data = {
      email,
      password
    }

    try {
      const userData = await login(data).unwrap()
      console.log(userData)
      dispatch(setUser(userData))
      setEmail('')
      setPassword('')
      userData.isNotFirst ? navigate('/') : navigate('/userdetail')
    } catch (error) {
      dispatch(openModal(true))
      console.log('error: ', error)
    }
  }

  return (
    <div className={styles.signIn}>
      <Decoration />
      <div className={styles.container}>
        <div className={styles.title}>
          <p>언제까지 내일로 미뤄?</p>
          <p>늦었다 생각할 때가</p>
          <p>가장 빠른 법!</p>
          <p>
            오늘부터 <span>SHARE WE!</span>
          </p>
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.input}>
            <label htmlFor='email'>
              <MailOutline />
            </label>
            <input
              name='email'
              type='email'
              placeholder='이메일'
              value={email}
              onChange={e => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div className={styles.input}>
            <label htmlFor='password'>
              <LockOutline />
            </label>
            <input
              name='password'
              type='password'
              placeholder='비밀번호'
              value={password}
              onChange={e => {
                setPassword(e.target.value)
              }}
            />
          </div>
        </div>
        <button className={styles.btn} onClick={signIn}>
          로그인
        </button>
        <p className={styles.goSignUp}>Share We가 처음이신가요?</p>
        <Link to='/signup' className={styles.signupbtn}>
          <span>Shall We?</span>
        </Link>
      </div>
      {isOpen ? (
        <Alert
          title={'존재하지 않는 회원정보'}
          detail={'아이디와 비밀번호를 다시 확인해주세요.'}
          confirm={'확인'}
        />
      ) : null}
    </div>
  )
}

export default SignIn
