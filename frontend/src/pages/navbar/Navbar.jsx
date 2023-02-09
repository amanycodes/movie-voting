
import { useState, React } from "react";
import Button from "../../components/R_button"
import MenuItem from '../../components/MenuItem'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Input, TextField, useThemeProps } from "@mui/material";
import T_Button from "../../components/T_button";
import AccountMenu from "../../components/loggedInTile";
import { useContext } from "react";
import { GlobalContext } from "../../globalStates/State";

const Navbar = (props) => {
    const [showField, setShowField] = useState(false)

    const movieDropArray = ['latest', 'now_playing', 'popular', 'top_rated', 'upcoming']
    const profileDropArray = ['Profile', 'My Account', 'Logout']
    const showArray = ['latest', 'popular', 'on_the_air','airing_today', 'top_rated']
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
                <T_Button path = '/' size = {15} value = "DASHBOARD" />
                <MenuItem value = "MOVIES" dropArray={movieDropArray} setGenre={props.setGenre} setShow={props.setShow} show='movie'/>
                <MenuItem value = "TV SHOWS" dropArray={showArray} setGenre={props.setGenre} setShow={props.setShow} show='tv'/>
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
                 {true ? <Button size ={14} value = "Sign In" path= 'login'/> : <AccountMenu />}
                
            </Box>
        </Container>
    )
}

export default Navbar