import React from 'react'
import Form from '../base/Form'
import FlexBox from '../base/FlexBox'
import FormInput from '../common/FormInput'
import H1 from '../base/H1'
import AppButton from '../common/AppButton'
import { Link, useNavigate } from 'react-router-dom'
import useBooksContext from '../../hooks/use-books-context'

export default function RegisterForm() {
  const { handleSubmit } = useBooksContext()
  const history = useNavigate()

  const handleClick = () => {
    history('/')
    handleSubmit()
  }
  return (
    <Form className='w-full' action='/'>
    <H1 className='colorful text-4xl font-bold uppercase text-center mb-5'>Register</H1>
      <FlexBox className='flex-col gap-4 mb-2'>
        <FormInput title='name' color='pink'/>
        <FormInput title='email' type='email' color='orange'/>
        <FormInput title='password' type='password'  color='purple'/>
      </FlexBox>
      <Link to='/login' className='text-red-500 text-sm mb-10 block text-center capitalize'>you have an account? login here.</Link>
      <AppButton onClick={handleClick}>
        Register
      </AppButton>
    </Form>
  )
}
