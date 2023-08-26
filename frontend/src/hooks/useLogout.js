import React, { useContext, useState } from 'react'
import { authContext } from '../globalContext/context/AuthContext'
import { toast } from 'react-toastify'

export const useLogout = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const {userInfo,dispatch} = useContext(authContext)

  const logout = async () =>{
    setIsLoading(true)
    setError(null)

    const response = await fetch('api/user/logout',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
    })
    const json = await response.json()
    if(!response.ok){
      setIsLoading(false)
      setError(json)
    }
    if(response.ok){
      await dispatch({type: 'DEL_CRED'})
    }
    console.log(userInfo)

    setIsLoading(false)
  }
  return {logout, isLoading, error}
}
