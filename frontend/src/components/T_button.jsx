import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { GlobalContext } from '../globalStates/State';
import { MovieContext } from '../globalContext/context/MovieContext';

const T_Button = (props) => {
    const size = props.size
    const {dispatch} = useContext(MovieContext)
    function handleClick(){
        dispatch({type: 'CHANGE_HOVER', payload: null})
    }
    return( 
            
            <Button variant="text"
            onClick = {handleClick}
            sx= {{
            padding: 0,
            paddingLeft: 2,
            paddingRight: 2,
            paddingTop: 1.2,
            paddingBottom: 1.2,
            margin: 0,
            letterSpacing: 1,
            borderRadius: 6,
            
            '&:hover': {
                backgroundColor: 'rgba(128,0,128,.3)',
                transition: '200ms'
            }
        }}
        disableElevation>
                <Typography sx={{
                    fontSize: '1rem', 
                    color: 'white', 
                    fontFamily: 'League Spartan',
                    letterSpacing: '0.1em',
                    fontWeight: '400'
                    }}>{props.value}</Typography>
        </Button>
        
    )
}

export default T_Button