import { useContext, useState } from 'react'
import { authContext } from '../globalContext/context/AuthContext'

export const useRegister = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useContext(authContext)

  const register = async (name, email, password) => {
    try {
      setIsLoading(true)
      setError(null)

      const response = await fetch('api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: 'include', // Important for handling cookies
        body: JSON.stringify({ name, email, password })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed')
      }

      // Store user info in localStorage
      localStorage.setItem('userInfo', JSON.stringify(data))

      // Update auth context
      dispatch({ type: 'SET_CRED', payload: data })

      return data
    } catch (err) {
      setError(err.message || 'An error occurred during registration')
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  return { register, isLoading, error }
}
