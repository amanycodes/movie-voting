import React, { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { authContext } from "../../globalContext/context/AuthContext"
import { useLogin } from '../../hooks/useLogin'
import { useRegister } from "../../hooks/useRegister"
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

const LoginPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isSignIn, setIsSignIn] = useState(true)
    const [formErrors, setFormErrors] = useState({})
    const { userInfo } = useContext(authContext)
    const { login, isLoading, error: loginError } = useLogin()
    const { register, isLoading: isRLoading, error: registerError } = useRegister()
    const navigate = useNavigate()
    const location = useLocation()
    
    useEffect(() => { 
        if (userInfo) {
            const from = location.state?.from || '/'
            navigate(from)
        }
    }, [navigate, userInfo, location])

    const validateForm = () => {
        const errors = {}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        
        if (!email.trim()) {
            errors.email = 'Email is required'
        } else if (!emailRegex.test(email)) {
            errors.email = 'Invalid email format'
        }
        
        if (!password.trim()) {
            errors.password = 'Password is required'
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters'
        }
        
        if (!isSignIn && !name.trim()) {
            errors.name = 'Username is required'
        }
        
        setFormErrors(errors)
        return Object.keys(errors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!validateForm()) {
            return
        }
        
        try {
            if (isSignIn) {
                await login(email, password)
            } else {
                await register(name, email, password)
            }
        } catch (err) {
            console.error('Authentication error:', err)
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const handleModeToggle = () => {
        setIsSignIn(prev => !prev)
        setEmail('')
        setPassword('')
        setName('')
        setFormErrors({})
    }

    return (
        <div className="pt-10 container mx-auto">
            <div className="mx-auto h-[450px] w-[450px] bg-dark-transparent rounded-lg flex flex-col justify-evenly items-center">
                <h2 className="text-white text-3xl font-semibold tracking-wider">
                    {isSignIn ? 'SIGN IN' : 'SIGN UP'}
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <div className="flex flex-col space-y-6">
                        {!isSignIn && (
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Username"
                                className="w-[300px] bg-[#D9D9D9] rounded-lg px-4 py-2"
                            />
                        )}
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail"
                            className="w-[300px] bg-[#D9D9D9] rounded-lg px-4 py-2"
                        />
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="w-[300px] bg-[#D9D9D9] rounded-lg px-4 py-2"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                            >
                                {showPassword ? (
                                    <EyeSlashIcon className="h-5 w-5" />
                                ) : (
                                    <EyeIcon className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="mt-4 mb-2">
                        <button
                            type="submit"
                            disabled={isLoading || isRLoading}
                            className="bg-primary hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                        >
                            {isSignIn ? 'Sign In' : 'Sign Up'}
                        </button>
                    </div>

                    {(isLoading || isRLoading) && (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    )}

                    {(loginError || registerError) && (
                        <p className="text-red-500 text-sm mt-2">
                            {loginError || registerError}
                        </p>
                    )}
                </form>

                <p className="text-white text-sm">
                    {isSignIn ? "Don't have an Account? " : "Already have an account? "}
                    <button 
                        onClick={handleModeToggle}
                        className="text-primary hover:underline"
                    >
                        {isSignIn ? 'Sign Up' : 'Sign In'}
                    </button>
                </p>

                <p className="text-white text-sm">
                    Are you a Creator?{' '}
                    <Link to="/creatorLogin" className="text-primary hover:underline">
                        Creator Sign In
                    </Link>
                </p>
            </div>

            <div className="text-center mt-2">
                <Link to="/adminLogin" className="text-primary hover:underline">
                    Admin Login
                </Link>
            </div>
        </div>
    )
}

export default LoginPage