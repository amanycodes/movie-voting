import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { GlobalContext } from '../globalStates/State';
import { MovieContext } from '../globalContext/context/MovieContext';

const R_button = (props) => {
    const size = props.size
    const {dispatch} = useContext(MovieContext)
    function handleClick(){
        dispatch({type: 'CHANGE_HOVER', payload: null})
    }
    return( 
            
            <Button variant="outline"
            onClick={handleClick}
            sx= {{
            borderRadius:7,
            border: 2,
            padding: 0,
            paddingLeft: 3,
            paddingRight: 3,
            borderColor: 'white',
            margin: 1,
            
            '&:hover': {
                borderColor: 'purple',
                backgroundColor: 'purple',
                transition: '200ms'
            }
            
        }}
        disableElevation>
                <Typography sx={{
                    fontSize: size, 
                    color: 'white', 
                    }}>{props.value}</Typography>
        </Button>
            
        
    )
}

export default R_button