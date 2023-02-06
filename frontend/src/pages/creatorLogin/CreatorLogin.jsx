import { Card, InputBase, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import C_button from "../../components/C_button"


const CreatorLoginPage = () => {
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
                    paddingTop: 5,
                    fontWeight: 600,
                    letterSpacing: 1
                }}>CREATOR SIGN IN</Typography>
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
                    marginBottom: 6,
                    borderRadius: 2,
                    color: '',
                    paddingLeft: 2,
                    paddingTop: 1,
                    paddingBottom: 1,
                }}/>
                </Box>
                <Box sx={{
                    marginTop: 0,
                    marginBottom: 8
                }}>
                    <C_button size = {25} value='Sign In' path = 'creatorLogin'/>
                </Box>
                <Typography sx={{color: 'white', paddingBottom: 4}}>Dont have an Account? <Typography onClick={handleClick} sx={{
                    display : 'inline',
                    color: 'purple',
                    '&:hover':{
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }
                }}> Sign Up</Typography></Typography>
            </Card> 
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
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>
                    <Typography variant="h4" sx = {{
                        color: 'white',
                        fontWeight: 600,
                        letterSpacing: 1
                    }}>CREATOR SIGN UP</Typography>
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
                    <InputBase type="text" placeholder = 'Password' sx={{
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
                        <C_button size = {25} value='Sign Up' path = '/creatorLogin'/>
                    </Box>
                    <Typography variant="subtitle2" sx={{color: 'white'}}>Aldready have an Account? <Typography onClick={handleClick} sx={{
                    display : 'inline',
                    color: 'purple',
                    '&:hover':{
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }
                }}> Sign In</Typography></Typography>
                </Card> 
            </Container>
        }
            



        </>
    )
}

export default CreatorLoginPage