
import { useState, React } from "react";
import Button from "../../components/R_button"
import MenuItem from '../../components/MenuItem'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Input, TextField } from "@mui/material";

const Navbar = () => {
    const [showField, setShowField] = useState(false)

    function handleClick(){
        setShowField(prevState => !prevState)
        console.log(showField)
    }
    return(
        <Container 
            sx={{
            display: 'flex',
            justifyContent: 'space-between',
            minWidth: '90vw',
            paddingTop: 1
        }}> 

            {/* menu items */}
            <Box sx={{  
                display: 'flex',
                p: 0,
                margin: 1,
            }}>
                <MenuItem value = "DASHBOARD"/>
                <MenuItem value = "MOVIES"/>
                <MenuItem value = "TV SHOWS"/>
                <MenuItem value = "LEADERBOARD"/>
            </Box>

            {/* right items */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                {showField ? <Input sx={{
                    paddingLeft: 2,
                    border: 2,
                    borderRadius: 5,
                    color: 'white',
                    fontSize: 10,
                    width: 300,
                    '&:active':{
                        textDecoration:'none'
                    }
                }}
                disableUnderline ={true}
                /> : 
                <IconButton onClick={handleClick} sx={{
                    '&:hover':{color:'purple'},
                    color: 'white'
                    }}>
                <SearchIcon />
                </IconButton>
                 }
                <Button value = "Sign In"/>
            </Box>
        </Container>
    )
}

export default Navbar