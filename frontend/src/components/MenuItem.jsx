import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GlobalContext } from '../globalStates/State';
import { MovieContext } from '../globalContext/context/MovieContext';


export default function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const {dispatch} = React.useContext(MovieContext)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    dispatch({type: 'CHANGE_HOVER', payload: null})
    dispatch({type: 'CHANGE_SEARCH', payload: ""})
  };
  
  const handleClose = (name) => {
    dispatch({type: 'CHANGE_SHOWTYPE', payload: props.show})
    dispatch({type: 'CHANGE_GENRE', payload: (name.toLowerCase()).replace(' ', '_')})
    setAnchorEl(null);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null)
  }
  const dropArray = props.dropArray
  console.log(dropArray)
  return (
    <div>

      <Button
        sx = {{
            color: 'white',
            fontFamily: 'League Spartan',
            fontWeight: '400',
            '&:hover':{
                color: 'white',
                backgroundColor: 'rgba(128,0,128,.3)'
            },
            borderRadius: 5,
            paddingLeft: 2,
            paddingRight: 2,
            paddingTop: 1,
            paddingBottm: 0,
            fontSize: '1rem',
            letterSpacing: '0.1em'
        }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {props.value}
      </Button>


      <Menu 
        id="basic-menu"
        onClose={handleCloseMenu}
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        classes={
          {root:{
            "&.MuiMenu-root" : {
              backgroundColor: '#252525'
            }
          }}}
      >
        {dropArray.map((obj)=>{
          return (
            <MenuItem key = {obj[0]} sx={{
              transition: '200ms ease-out',
              color: 'black',
              fontFamily: "League Spartan",
              fontWeight: '400',
              fontSize: '1.05rem',
              '&:hover': {
                textDecoration: 'underline',
                textDecorationColor: 'purple',
              }
            }} onClick={()=>handleClose(obj)}>{obj}</MenuItem>
          )  
        })}
      </Menu>
    </div>
  );
}