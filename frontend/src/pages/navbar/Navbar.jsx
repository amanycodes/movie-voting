
import { useState, React, useContext } from "react";
import Button from "../../components/R_button"
import MenuItem from '../../components/MenuItem'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Input, TextField, useThemeProps } from "@mui/material";
import T_Button from "../../components/T_button";
import AccountMenu from "../../components/loggedInTile";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../globalStates/State";

const Navbar = (props) => {
    const [showField, setShowField] = useState(false)
    const [input, setInput] = useState('')
    const context = useContext(GlobalContext)
    context.globalState.searchState = input.replace(/\s/g, '+')
    console.log(context.globalState.searchState)
    const movieDropArray = ['now_playing', 'popular', 'top_rated', 'upcoming']
    const profileDropArray = ['Profile', 'My Account', 'Logout']
    const showArray = ['popular', 'on_the_air','airing_today', 'top_rated']
    function handleClick(){
        context.globalState.hoverState = null
        if(input != ''){
        props.setSearchInfo()
        }
        props.setState()
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
                <Link to = '/' style={{textDecoration: 'none'}}><T_Button path = '/' size = {15} value = "DASHBOARD" setState =  {props.setState}/></Link> 
                <Link to = '/' style={{textDecoration: 'none'}}><MenuItem value = "MOVIES" dropArray={movieDropArray} setGenre={props.setGenre} setShow={props.setShow} show='movie' state ={props.state} setState =  {props.setState} setSearchInfo = {props.setSearchInfo}/></Link>
                <Link to = '/' style={{textDecoration: 'none'}}><MenuItem value = "TV SHOWS" dropArray={showArray} setGenre={props.setGenre} setShow={props.setShow} show='tv'state ={props.state} setState =  {props.setState} setSearchInfo = {props.setSearchInfo}/></Link>
                <Link to='/leaderboard' style={{textDecoration: 'none'}}><T_Button path = '/leaderboard' size = {15} value = "LEADERBOARD" setState= {props.setState}/></Link>
            </Box>

            {/* right items */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center'
            }}
            >
                {showField && <Input sx={{
                    paddingLeft: 2,
                    paddingRight: 2,
                    border: 2,
                    borderRadius: 5,
                    color: 'white',
                    fontSize: 12,
                    width: 200,
                }}
                value = {input}
                onChange = {(e)=>{
                    setInput(e.target.value)
                    }}
                disableUnderline ={true}
                />}
                <Link to= '/'>
                <IconButton onClick={handleClick} sx={{
                    '&:hover':{color:'purple'},
                    color: 'white'
                    }}>
                <SearchIcon />
                </IconButton>
                </Link>
                 
                 {true ? <Link to='/login' style={{textDecoration: 'none'}}><Button size ={14} value = "Sign In" setState={props.setState}/></Link> : <AccountMenu />}
                
            </Box>
        </Container>
    )
}

export default Navbar