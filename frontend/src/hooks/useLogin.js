import { useContext, useState } from 'react'
import { authContext } from '../globalContext/context/AuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useContext(authContext)

  const login = async (email, password) => {
    try {
      setIsLoading(true)
      setError(null)

      const response = await fetch('api/user/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: 'include', // Important for handling cookies
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to login')
      }

      // Store user info in localStorage
      localStorage.setItem('userInfo', JSON.stringify(data))

      // Update auth context
      dispatch({ type: 'SET_CRED', payload: data })

      return data
    } catch (err) {
      setError(err.message || 'An error occurred during login')
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  return { login, isLoading, error }
}
