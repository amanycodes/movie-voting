import { Card, Input, InputBase, TextField, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import React, { useContext, useEffect, useState } from "react"
import { Form, Link, useNavigate } from "react-router-dom"
import C_button from "../../components/C_button"
import { authContext } from "../../globalContext/context/AuthContext"
import {useLogin} from '../../hooks/useLogin'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader'
import { useRegister } from "../../hooks/useRegister"

const LoginPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSignIn, setIsSignIn] = useState(true)
    const {userInfo} = useContext(authContext)
    const {login, isLoading} = useLogin()
    const {register, isRLoading} = useRegister()
    const navigate = useNavigate()
    
    useEffect(()=>{ 
        if(userInfo != null){
            navigate('/')
        }
    }, [navigate, userInfo])


    function handleClick(){
        setIsSignIn(prevState => !prevState)
        setEmail('')
        setPassword('')
        setName('')
    }


    const handleLoginSubmit = (e)=>{
        e.preventDefault()
        try {
            login(email, password)
            if(userInfo != null){
                navigate('/')
            }
        }catch(err){
            console.log(err.error)
        }
    }

    const handleRegisterSubmit = (e) =>{
        e.preventDefault()
        try {
            register(name, email, password)
            if(userInfo != null){
                navigate('/')
            }
        } catch (err) {
            console.log(err.error)
        }
    }
    return(
        <>
        {isSignIn ? <Container
        id='sign-in'
        sx={{
            paddingTop: 10
        }}>
            <Card sx={{
                margin: 'auto',
                height: 450,
                width: 450,
                backgroundColor: 'rgba(37,37,37,.5)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
                <Typography variant="h4" sx = {{
                    color: 'white',
                    
                    fontWeight: 600,
                    letterSpacing: 1
                }}>SIGN IN</Typography>
                <form onSubmit={handleLoginSubmit} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                <Input value={email} onChange={(e)=>{setEmail(e.target.value)}} disableUnderline type="text" placeholder = 'E-mail' sx={{
                    width: 300,
                    backgroundColor: '#D9D9D9',
                    marginTop: 4,                    marginBottom: 6,
                    borderRadius: 2,
                    color: '',
                    paddingLeft: 2,
                    paddingTop: 1,
                    paddingBottom: 1,
                }}/>
                <Input value={password} onChange={(e)=>{setPassword(e.target.value)}} disableUnderline type="password" placeholder = 'Password' sx={{
                    width: 300,
                    backgroundColor: '#D9D9D9',
                    marginBottom: 2,
                    borderRadius: 2,
                    color: '',
                    paddingLeft: 2,
                    paddingTop: 1,
                    paddingBottom: 1,
                }}/>
                </Box>
                <Box sx={{
                    marginTop: 0,
                    marginBottom: 2
                }}>
                    <C_button size = {25} value='Sign In' path = '/login' type='submit' submit = {true}/>
                </Box>
                {isLoading && <Loader/>}
                </form>
                
                <Typography variant="subtitle2" sx={{color: 'white'}}>Dont have an Account? <Typography onClick={handleClick} sx={{
                    display : 'inline',
                    color: 'purple',
                    '&:hover':{
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }
                }}> Sign Up</Typography></Typography>
                <Typography variant="subtitle2" sx={{color: 'white'}}>Are you a Creator? <Typography sx={{
                    display : 'inline',
                    color: 'purple',
                    '&:hover':{
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }
                }}><Link to='/creatorLogin' style={{textDecoration: 'none', color: 'purple'}}>Creator Sign In</Link></Typography></Typography>
            </Card>
            <Typography sx={{
                    marginLeft: 44,
                    color: 'purple',
                    '&:hover':{
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }
                }}><Link to='/adminLogin' style={{textDecoration: 'none', color: 'purple'}}>Admin Login</Link></Typography>
            
        </Container> : 
        <Container
            id='sign-up'
            sx={{
                paddingTop: 10
            }}>
                <Card sx={{
                    margin: 'auto',
                    height: 450,
                    width: 450,
                    backgroundColor: 'rgba(37,37,37,.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}>
                    <Typography variant="h4" sx = {{
                        color: 'white',
                        fontWeight: 600,
                        letterSpacing: 1
                    }}>SIGN UP</Typography>
                    <form onSubmit={handleRegisterSubmit} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                    }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    <Input type="text" placeholder = 'Username' disableUnderline value={name} onChange={(e)=>{setName(e.target.value)}} sx={{
                        width: 300,
                        backgroundColor: '#D9D9D9',
                        marginBottom: 3,
                        borderRadius: 2,
                        color: '',
                        paddingLeft: 2,
                        paddingTop: 1,
                        paddingBottom: 1,
                    }}/>
                    <Input type="email" placeholder = 'E-mail' value={email} onChange={(e)=>{setEmail(e.target.value)}} disableUnderline sx={{
                        width: 300,
                        backgroundColor: '#D9D9D9',
                        marginBottom: 3,
                        borderRadius: 2,
                        color: '',
                        paddingLeft: 2,
                        paddingTop: 1,
                        paddingBottom: 1,
                    }}/>
                    <Input type="password" placeholder = 'Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} disableUnderline sx={{
                        width: 300,
                        backgroundColor: '#D9D9D9',
                        marginBottom: 0,
                        borderRadius: 2,
                        color: '',
                        paddingLeft: 2,
                        paddingTop: 1,
                        paddingBottom: 1,
                    }}/>
                    </Box>
                    <Box sx={{
                        marginBottom: 2
                    }}>
                        <C_button size = {25} value='Sign Up' path = '/login' type='submit' submit = {true}/>
                    </Box>
                    {isRLoading && <Loader/>}
                    </form>
                    <Typography variant="subtitle2" sx={{color: 'white' }}>Aldready have an Account? <Typography onClick={handleClick} sx={{
                    display : 'inline',
                    color: 'purple',
                    '&:hover':{
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }
                }}> Sign In</Typography></Typography>
                <Typography variant="subtitle2" sx={{color: 'white',  }}>Are you a Creator? <Typography sx={{
                    display : 'inline',
                    color: 'purple',
                    '&:hover':{
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }
                }}><Link to='/creatorLogin' style={{textDecoration: 'none', color: 'purple'}}>Creator Sign In</Link></Typography></Typography>
                </Card> 
                <Typography sx={{
                    marginLeft: 44,
                    color: 'purple',
                    '&:hover':{
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }
                }}><Link to='/adminLogin' style={{textDecoration: 'none', color: 'purple'}}>Admin Login</Link></Typography>
            </Container>
        }
        </>
    )
}

export default LoginPage