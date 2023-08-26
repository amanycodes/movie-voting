
import { useState, React, useContext, useEffect } from "react";
import Button from "../../components/R_button"
import MenuItem from '../../components/MenuItem'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Input } from "@mui/material";
import T_Button from "../../components/T_button";
import AccountMenu from "../../components/loggedInTile";
import { Link } from "react-router-dom";
import { MovieContext } from "../../globalContext/context/MovieContext";
import { authContext } from "../../globalContext/context/AuthContext";

const Navbar = (props) => {

    const {movieObject, dispatch} = useContext(MovieContext)
    const [showField, setShowField] = useState(false)
    const [input, setInput] = useState('')
    const {userInfo} = useContext(authContext)
    const movieDropArray = ['Now Playing', 'Popular', 'Top Rated', 'Upcoming']
    const profileDropArray = ['Profile', 'My Account', 'Logout']
    const showArray = ['Popular', 'On the Air','Airing Today', 'Top Rated']

    function handleClick(){
        if(input != ''){
            dispatch({type: 'CHANGE_SEARCH', payload: input.replace(/\s/g, '+')})
        }
        dispatch({type: 'CHANGE_HOVER', payload: null})
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
                <Link to = '/' style={{textDecoration: 'none'}}><T_Button path = '/' size = {15} value = "DASHBOARD"/></Link> 
                <Link to = '/' style={{textDecoration: 'none'}}><MenuItem value = "MOVIES" dropArray={movieDropArray}  show='movie'/></Link>
                <Link to = '/' style={{textDecoration: 'none'}}><MenuItem value = "TV SHOWS" dropArray={showArray} show='tv'/></Link>
                <Link to='/leaderboard' style={{textDecoration: 'none'}}><T_Button path = '/leaderboard' size = {15} value = "LEADERBOARD"/></Link>
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
                <SearchIcon  />
                </IconButton>
                </Link>
                {!userInfo ? <Link to='/login' style={{textDecoration: 'none'}}><Button size ={14} value = "Sign In" setState={props.setState}/></Link> : <AccountMenu />}
            </Box>
        </Container>
    )
}

export default Navbar