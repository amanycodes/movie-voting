import { Typography } from "@mui/material"
import { Box, Container, margin } from "@mui/system"
import React from "react"
import Button from "../../components/C_button"
import Tiles from "../../components/Tiles"

const HomePage = () => {
    return(

        <Container sx={{
            display: 'flex',
            minWidth: '100vw',
            height: '85vh',
            alignItems: 'center',
            flexDirection:'column',
            justifyContent: 'space-between'
        }}>
        {true ? <Box  sx={{
            paddingTop: 18,
            paddingLeft: 12,
            marginRight: 'auto',
        }} id='hover-action'>
                <Typography variant="h3" sx={{
                    color: 'white',
                    fontWeight: 600,
                    letterSpacing: 2
                }}>JOHN WICK</Typography>
                <Button size ={18} value="Read More"/>
                <Button size ={18} value="Nominate"/>
            </Box> : 
            <Box sx={{
                paddingTop: 32,
                color: 'white',
                textAlign: 'center'
            }}>
                <Typography variant="h4" sx={{
                    letterSpacing: 2,
                    fontWeight: 700
                }}>WELCOME TO SALTEDPOPCORN.</Typography>
                <Typography variant="h7" sx={{
                    letterSpacing: 2,
                    fontWeight: 300
                }}>Where you get salty about movies. (And rate them to win Movie Contests. ;))</Typography>
            </Box>}
            <Box>
                <Tiles/>
            </Box>
        </Container>
    )
}

export default HomePage