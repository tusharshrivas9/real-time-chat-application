import React, { useState } from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/button/Button'

const Form = ({
  isSignInpage = true
}) => {
  const [data ,setData] = useState({
    ...(!isSignInpage && {
      fullName : ""
    }),
    email:"",
    password:""
  })
  return (
    <div className='bg-white w-[500px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center'>
      <div className='text-4xl font-extrabold'>Welcome {isSignInpage && "Back"}</div>
      <div className='text-xl font-light mb-14'>{isSignInpage ? "Sign in to get explored" : "Sign up now to get started.."}</div>
      <form className='flex flex-col items-center w-full' onSubmit={()=>{alert("subimitted")}}>
      {!isSignInpage && <Input label='Name' name='name' placeholder='Enter your full name' className='mb-6' value={data.fullName} onChange={(e)=>setData({...data,fullName:e.target.value})}/>}
      <Input label='Email' type='email' name='email' placeholder='Enter your email' className='mb-6' value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
      <Input label='Password' type='password' name='password' placeholder='Enter your password' className='mb-14' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
      <Button label={isSignInpage ?'Sign in':'Sign up'} className='w-1/2 mb-2' type='submit'/>
      </form>
     
      <div>{isSignInpage ? "Didn't have an account" : "Already have an account?"}<span className='text-primary cursor-pointer underline'>{isSignInpage ? "Sign up":"Sign in"}</span></div>
    </div>
  )
}

export default Form



