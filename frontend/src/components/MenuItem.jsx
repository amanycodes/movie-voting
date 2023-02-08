import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>

      <Button
        sx = {{
            color: 'white',
            fontFamily: 'League Spartan',
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
        onClose={handleClose}
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={{
          transition: '200ms ease-out',
          '&:hover': {
            textDecoration: 'underline',
            textDecorationColor: 'purple',
          }
        }} onClick={handleClose}>Profile</MenuItem>
        <MenuItem  onClick={handleClose}>My account</MenuItem>
        <MenuItem  onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}