import React from 'react'
import Form from './modules/Forms/Form'
import Dashbord from './modules/dashbord/Dashbord'
import {Routes,Route, Navigate} from "react-router-dom"


const ProtectedRoute = ({children})=>{
  const isLoggedIn = localStorage.getItem("user:token")!==null || true

  if (!isLoggedIn) {
    
   return <Navigate to={"/users/sign_in"}/> 
  }else if (isLoggedIn && ["/users/sign_in" , "/users/sign_up"].includes(window.location.pathname).includes("users/")) {
    return <Navigate to={"/"}/> 
  }
  return children
}
const App = () => {
  return (
   <Routes>
    <Route path='/' element={
      <ProtectedRoute>
        <Dashbord/>
      </ProtectedRoute>
    }/>
    <Route path='/users/sign_in' element={
      <ProtectedRoute>
      <Form isSignInpage={true}/>
      </ProtectedRoute>
      }/>
    <Route path='/users/sign_up' element={
      <ProtectedRoute>
      <Form isSignInpage={false}/>
      </ProtectedRoute>
    }/>
   </Routes>
  )
}

export default App

