import { Card, InputBase, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import React, { useState } from "react"
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
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <Typography variant="h4" sx = {{
                    color: 'white',
                    paddingTop: 0,
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
                    marginBottom: 6,
                    borderRadius: 2,
                    color: '',
                    paddingLeft: 2,
                    paddingTop: 1,
                    paddingBottom: 1,
                }}/>
                <InputBase type="text" placeholder = 'Password' sx={{
                    width: 300,
                    backgroundColor: '#D9D9D9',
                    marginBottom: 6,
                    borderRadius: 2,
                    color: '',
                    paddingLeft: 2,
                    paddingTop: 1,
                    paddingBottom: 1,
                }}/>
                </Box>
                <C_button size = {20} value='Sign In'/>
                <Typography sx={{color: 'white'}}>Dont have an Account? <Typography onClick={handleClick} sx={{
                    display : 'inline',
                    '&:hover':{
                        color: 'purple',
                        cursor: 'pointer'
                    }
                }}> Sign Up</Typography></Typography>
            </Card> 
        </Container> : 
        <Container
            id='sign-Up'
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
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>
                    <Typography variant="h4" sx = {{
                        color: 'white',
                        paddingTop: 0,
                        fontWeight: 600,
                        letterSpacing: 1
                    }}>SIGN UP</Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    <InputBase type="text" placeholder = 'E-mail' sx={{
                        width: 300,
                        backgroundColor: '#D9D9D9',
                        marginBottom: 6,
                        borderRadius: 2,
                        color: '',
                        paddingLeft: 2,
                        paddingTop: 1,
                        paddingBottom: 1,
                    }}/>
                    <InputBase type="text" placeholder = 'Password' sx={{
                        width: 300,
                        backgroundColor: '#D9D9D9',
                        marginBottom: 6,
                        borderRadius: 2,
                        color: '',
                        paddingLeft: 2,
                        paddingTop: 1,
                        paddingBottom: 1,
                    }}/>
                    <InputBase type="text" placeholder = 'Password' sx={{
                        width: 300,
                        backgroundColor: '#D9D9D9',
                        marginBottom: 6,
                        borderRadius: 2,
                        color: '',
                        paddingLeft: 2,
                        paddingTop: 1,
                        paddingBottom: 1,
                    }}/>
                    </Box>
                    <C_button size = {20} value='Sign Up'/>
                    <Typography sx={{color: 'white'}}>Aldready have an Account? <Typography onClick={handleClick} sx={{
                    display : 'inline',
                    '&:hover':{
                        color: 'purple',
                        cursor: 'pointer'
                    }
                }}> Sign In</Typography></Typography>
                </Card> 
            </Container>
        }
            



    
        </>
        
    )
}

export default LoginPage