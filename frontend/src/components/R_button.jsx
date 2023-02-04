import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const R_button = (props) => {
    const size = props.size
    return( 
            <Link to= '/login' style={{ textDecoration: 'none' }}>
            <Button variant="outline"
            sx= {{
            borderRadius:7,
            border: 2,
            padding: 0,
            paddingLeft: 3,
            paddingRight: 3,
            paddingTop: .2,
            paddingBottom: .2,
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
            </Link>
        
    )
}

export default R_button