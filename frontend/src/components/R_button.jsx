import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { GlobalContext } from '../globalStates/State';

const R_button = (props) => {
    const size = props.size
    const context = useContext(GlobalContext)
    function handleClick(){
        context.globalState.hoverState = null
        console.log(context.globalState.hoverState)
        props.setState()
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