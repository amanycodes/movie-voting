import { Card, CardContent, Grid, Input, InputBase, Typography } from "@mui/material"
import { Box, Container, minWidth } from "@mui/system"
import React from "react"
import C_button from "../../components/C_button"


const CreateContestPage = () => {
    return(
        <Container sx={{
            marginLeft: 12,
            minWidth: '80vw'
        }}>
        <Box>
            <Typography variant="h2" sx={{
                color: 'white',
                fontFamily: 'League Spartan',
                fontWeight: 700,
                marginTop: '2rem'
            }}>CREATE CONTEST</Typography>
        </Box>
        <Grid container spacing={2} rowGap={0} columnGap={5} sx={{
            backgroundColor: 'rgba(37,37,37,.8)',
            borderRadius: 2,
            marginTop: 2,
            height: '500px',
            alignItems: 'center',
            paddingLeft: 2,
            margin: 'auto'
        }}>
            <Grid item>
                <InputBase type="text" placeholder = 'Movie title' sx={{
                        width: 300,
                        backgroundColor: '#D9D9D9',                   
                        borderRadius: 2,
                        color: '',
                        paddingLeft: 2,
                        paddingTop: 1,
                        paddingBottom: 1,
                    }}/>  
            </Grid>
            <Grid item>
                <InputBase type="text" placeholder = 'E-mail' sx={{
                        width: 300,
                        backgroundColor: '#D9D9D9',                   
                        borderRadius: 2,
                        color: '',
                        paddingLeft: 2,
                        paddingTop: 1,
                        paddingBottom: 1,
                    }}/>  
            </Grid>
            <Grid item>
                <InputBase type="text" placeholder = 'E-mail' sx={{
                        width: 300,
                        backgroundColor: '#D9D9D9',                   
                        borderRadius: 2,
                        color: '',
                        paddingLeft: 2,
                        paddingTop: 1,
                        paddingBottom: 1,
                    }}/>  
            </Grid>
            <Grid item>
                <InputBase type="time" placeholder = 'E-mail' sx={{
                        width: 300,
                        backgroundColor: '#D9D9D9',                   
                        borderRadius: 2,
                        color: '',
                        paddingLeft: 2,
                        paddingTop: 1,
                        paddingBottom: 1,
                    }}/>  
            </Grid>
            <Grid item>
                <InputBase type="text" placeholder = 'E-mail' sx={{
                        width: 300,
                        backgroundColor: '#D9D9D9',                   
                        borderRadius: 2,
                        color: '',
                        paddingLeft: 2,
                        paddingTop: 1,
                        paddingBottom: 1,
                    }}/>  
            </Grid>
            <Grid item>
                <InputBase type="text" placeholder = 'E-mail' sx={{
                        width: 300,
                        backgroundColor: '#D9D9D9',                   
                        borderRadius: 2,
                        color: '',
                        paddingLeft: 2,
                        paddingTop: 1,
                        paddingBottom: 1,
                    }}/>  
            </Grid>
            <Grid item>
                <C_button size={25} value='SUBMIT' path='/createContest'/> 
            </Grid>
        </Grid>
        </Container>
    )
}

export default CreateContestPage