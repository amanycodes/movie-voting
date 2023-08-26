import React, { useContext, useState } from 'react'
import { authContext } from '../globalContext/context/AuthContext'
import { toast } from 'react-toastify'

export const useRegister = () => {
    const [error, setError] = useState(null)
    const [isRLoading, setIsRLoading] = useState(null)
    const {userInfo,dispatch} = useContext(authContext)

    const register = async (name, email, password) =>{
        setIsRLoading(true)
        setError(null)

        const response = await fetch('api/user/',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, email, password})
        })
        const json = await response.json()
        if(!response.ok){
        setIsRLoading(false)
        setError(json.message)
        toast.error(error)
        console.log(error)
        }
        if(response.ok){
        await dispatch({type: 'SET_CRED', payload: json})
        }
        console.log(userInfo)
        setIsRLoading(false)
    }
    return {register, isRLoading, error}
}
