import { Card, InputBase, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import C_button from "../../components/C_button"



const LoginPage = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    function handleClick(){
        setIsSignIn(prevState => !prevState)
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
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                <InputBase type="text" placeholder = 'E-mail' sx={{
                    width: 300,
                    backgroundColor: '#D9D9D9',
                    marginTop: 4,                    marginBottom: 6,
                    borderRadius: 2,
                    color: '',
                    paddingLeft: 2,
                    paddingTop: 1,
                    paddingBottom: 1,
                }}/>
                <InputBase type="text" placeholder = 'Password' sx={{
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
                    <C_button size = {25} value='Sign In' path = '/login'/>
                </Box>
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
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    <InputBase type="text" placeholder = 'Username' sx={{
                        width: 300,
                        backgroundColor: '#D9D9D9',
                        marginBottom: 3,
                        borderRadius: 2,
                        color: '',
                        paddingLeft: 2,
                        paddingTop: 1,
                        paddingBottom: 1,
                    }}/>
                    <InputBase type="text" placeholder = 'E-mail' sx={{
                        width: 300,
                        backgroundColor: '#D9D9D9',
                        marginBottom: 3,
                        borderRadius: 2,
                        color: '',
                        paddingLeft: 2,
                        paddingTop: 1,
                        paddingBottom: 1,
                    }}/>
                    <InputBase type="password" placeholder = 'Password' sx={{
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
                        <C_button size = {25} value='Sign Up' path = '/login'/>
                    </Box>
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