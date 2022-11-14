import React, { useState } from 'react'
import { Login } from './components/Login'
import { Register } from './components/Register'

const Auth = () => {
  const [open, setOpen] = useState(true)

  const handleChange = () => {
    setOpen((currentValue) => (currentValue = !currentValue))
  }

  if (open) return <Login handelChange={handleChange} />

  return <Register handleChange={handleChange} />
}

export default Auth
