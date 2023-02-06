import { Card, InputBase, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import C_button from "../../components/C_button"


const AdminLoginPage = () => {
    return(
        <Container
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
                }}>ADMIN LOGIN</Typography>
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
                    <C_button size = {25} value='Sign In' path = '/login'/>
                </Box>
            </Card>
        </Container>
    )
}

export default AdminLoginPage