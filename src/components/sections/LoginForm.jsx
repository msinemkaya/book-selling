import React from 'react'
import Form from '../base/Form'
import FlexBox from '../base/FlexBox'
import FormInput from '../common/FormInput'
import H1 from '../base/H1'
import AppButton from '../common/AppButton'
import { Link } from 'react-router-dom'

export default function LoginForm() {
  return (
    <Form className='w-full'>
    <H1 className='colorful text-4xl font-bold uppercase text-center mb-5'>Login</H1>
      <FlexBox className='flex-col gap-4 mb-2'>
        <FormInput title='email' color='pink'/>
        <FormInput title='password' color='purple'/>
      </FlexBox>
      <Link to='/register' className='text-red-500 text-sm mb-10 block text-center capitalize'>you don't have an account? register here.</Link>
      <Link to='/'>
        <AppButton>Login</AppButton>
      </Link>
    </Form>
  )
}
