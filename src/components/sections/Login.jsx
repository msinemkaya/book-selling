import React from 'react'
import FlexBox from '../base/FlexBox'
import LoginForm from './LoginForm'
import { useLocation } from 'react-router-dom'
import RegisterForm from './RegisterForm'

export default function Login() {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <FlexBox className='w-full h-full min-h-screen justify-center items-center'>
      <FlexBox className='bg-white p-6 sm:w-1/2 md:w-1/3 w-full sm:rounded m-4'>
        {location.pathname === '/login' && <LoginForm/>}
        {location.pathname === '/register' && <RegisterForm/>}
      </FlexBox>
    </FlexBox>
  )
}
