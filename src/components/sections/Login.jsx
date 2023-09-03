import React from 'react'
import FlexBox from '../base/FlexBox'
import LoginForm from './LoginForm'
import { Route, Routes, useLocation } from 'react-router-dom'
import RegisterForm from './RegisterForm'

export default function Login() {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <FlexBox className='w-full h-full min-h-screen justify-center items-center'>
      <FlexBox className='bg-white p-6 w-1/2 rounded'>
        {location.pathname === '/login' && <LoginForm/>}
        {location.pathname === '/register' && <RegisterForm/>}
      </FlexBox>
    </FlexBox>
  )
}
