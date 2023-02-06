
import { useState, React } from "react";
import Button from "../../components/R_button"
import MenuItem from '../../components/MenuItem'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Input, TextField } from "@mui/material";
import T_Button from "../../components/T_button";
import AccountMenu from "../../components/loggedInTile";

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
                <T_Button path = '/' size = {15} value = "DASHBOARD"/>
                <MenuItem value = "MOVIES"/>
                <MenuItem value = "TV SHOWS"/>
                <T_Button path = '/leaderboard' size = {15} value = "LEADERBOARD"/>
            </Box>

            {/* right items */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center'
            }}
            >
                {showField ? <Input sx={{
                    paddingLeft: 2,
                    paddingRight: 2,
                    border: 2,
                    borderRadius: 5,
                    color: 'white',
                    fontSize: 12,
                    width: 200,
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
                 {false ? <Button size ={14} value = "Sign In" path= 'login'/> : <AccountMenu />}
                
            </Box>
        </Container>
    )
}

export default Navbar