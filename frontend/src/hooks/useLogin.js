import React, { useContext, useState } from 'react'
import { authContext } from '../globalContext/context/AuthContext'
import { toast } from 'react-toastify'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const {userInfo,dispatch} = useContext(authContext)

  const login = async (email, password) =>{
    setIsLoading(true)
    setError(null)

    const response = await fetch('api/user/auth',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    })
    const json = await response.json()
    if(!response.ok){
      setIsLoading(false)
      setError(json.message)
      toast.error(error)
      console.log(error)
    }
    if(response.ok){
      await dispatch({type: 'SET_CRED', payload: json})
    }
    console.log(userInfo)

    setIsLoading(false)
  }
  return {login, isLoading, error}
}
