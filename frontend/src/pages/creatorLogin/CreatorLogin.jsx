import React, { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { authContext } from "../../globalContext/context/AuthContext"
import { useLogin } from '../../hooks/useLogin'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import C_button from "../../components/C_button"


const CreatorLoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const { userInfo } = useContext(authContext)
    const { login, isLoading, error: loginError } = useLogin()
    const navigate = useNavigate()

    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(email, password)
            if (userInfo) {
                navigate('/')
            }
        } catch (err) {
            console.log(err.error)
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const [isSignIn, setIsSignIn] = useState(true)
    function handleClick(){
        setIsSignIn(prevState => !prevState)
    }

    return(
        <>
            {isSignIn ? 
            <div className="pt-10 container mx-auto">
                <div className="mx-auto h-[450px] w-[450px] bg-dark-transparent rounded-lg flex flex-col justify-evenly items-center">
                    <h2 className="text-white text-3xl font-semibold tracking-wider">
                        CREATOR SIGN IN
                    </h2>

                    <form onSubmit={handleSubmit} className="flex flex-col items-center">
                        <div className="flex flex-col space-y-6">
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
                            <C_button size = {25} value='Sign In' path = 'creatorLogin' type="submit" disabled={isLoading}/>
                        </div>

                        {isLoading && (
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        )}

                        {loginError && (
                            <p className="text-red-500 text-sm mt-2">
                                {loginError}
                            </p>
                        )}
                    </form>

                    <p className="text-white text-sm">
                        Dont have an Account? <p onClick={handleClick} className="text-primary hover:underline cursor-pointer">
                            Sign Up
                        </p>
                    </p>
                </div>
            </div> 
            : 
            <div className="pt-10 container mx-auto">
                <div className="mx-auto h-[450px] w-[450px] bg-dark-transparent rounded-lg flex flex-col justify-evenly items-center">
                    <h2 className="text-white text-3xl font-semibold tracking-wider">
                        CREATOR SIGN UP
                    </h2>

                    <div className="flex flex-col space-y-6">
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-[300px] bg-[#D9D9D9] rounded-lg px-4 py-2"
                        />
                        <input
                            type="text"
                            placeholder="E-mail"
                            className="w-[300px] bg-[#D9D9D9] rounded-lg px-4 py-2"
                        />
                        <input
                            type="text"
                            placeholder="Password"
                            className="w-[300px] bg-[#D9D9D9] rounded-lg px-4 py-2"
                        />
                    </div>

                    <div className="mt-4 mb-2">
                        <C_button size = {25} value='Sign Up' path = '/creatorLogin'/>
                    </div>

                    <p className="text-white text-sm">
                        Aldready have an Account? <p onClick={handleClick} className="text-primary hover:underline cursor-pointer">
                            Sign In
                        </p>
                    </p>
                </div>
            </div>
            }
            



        </>
    )
}

export default CreatorLoginPage