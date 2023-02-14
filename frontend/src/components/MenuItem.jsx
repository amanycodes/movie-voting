import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GlobalContext } from '../globalStates/State';


export default function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const context = React.useContext(GlobalContext)

  const handleClick = (event) => {
    context.globalState.showState = props.show
    context.globalState.genreState = 'popular'
    context.globalState.hoverState = null
    context.globalState.searchState = null
    props.setSearchInfo()
    props.setGenre()
    props.setShow()
    props.setState()
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (name) => {
    context.globalState.genreState = (name.toLowerCase()).replace(' ', '_')
    console.log(context.globalState.genreState)
    props.setGenre()
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