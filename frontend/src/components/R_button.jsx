import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const R_button = (props) => {

    return( 
            <Link to= '/login'>
            <Button variant="outline"
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
                <Typography sx={{fontSize: 12, color: 'white', textDecoration: 'none'}}>{props.value}</Typography>
        </Button>
            </Link>
        
    )
}

export default R_button