import { Typography } from "@mui/material"
import { Box, Container, margin } from "@mui/system"
import React from "react"
import Button from "../../components/R_button"
import Tiles from "../../components/Tiles"

const HomePage = () => {
    return(

        <Container sx={{
            display: 'flex',
            minWidth: '90vw',
            alignItems: 'center',
            flexDirection:'column',
            alignContent: 'flex-end'
        }}>
        {true ? <Box id='hover-action'>
                <Typography>JOHN WICK</Typography>
                <Button value="TRAILER"/>
            </Box> : 
            <Box>
                <Typography>WELCOME TO SALTEDPOPCORN</Typography>
            </Box>}
            
            
            <Box sx={{
                marginTop: 12
            }}>
                <Tiles/>
            </Box>
        </Container>
    )
}

export default HomePage