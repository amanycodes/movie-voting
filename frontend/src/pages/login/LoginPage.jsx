import { Card, InputBase, Typography } from "@mui/material"
import { Box, Container, display } from "@mui/system"
import React from "react"
import C_button from "../../components/C_button"


const LoginPage = () => {
    return(
        <Container
        sx={{
            paddingTop: 20
        }}>
            <Card sx={{
                margin: 'auto',
                height: 400,
                width: 500,
                backgroundColor: 'rgba(0,0,0,.7)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Typography variant="h5" sx = {{
                    color: 'white',
                    paddingTop: 2,
                    fontWeight: 600,
                    letterSpacing: 1
                }}>SIGN UP</Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                <InputBase type="text" sx={{
                    width: 200,
                    border: 2,
                    borderColor: 'white'
                }}/>
                <InputBase type="text" sx={{
                    width: 200,
                    border: 2,
                    borderColor: 'white'
                }}/>
                </Box>
                <C_button value='Sign In'/>
            </Card> 
        </Container>
    )
}

export default LoginPage