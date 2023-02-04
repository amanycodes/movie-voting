import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const C_button = (props) => {
    const size = props.size
    return( 
            <Link to= '/login' style={{ textDecoration: 'none' }}>
            <Button variant="contained"
            sx= {{
            borderRadius:7,
            border: 2,
            padding: 0,
            paddingLeft: 3,
            paddingRight: 3,
            paddingTop: .2,
            paddingBottom: .2,
            borderColor: 'purple',
            backgroundColor: 'purple',
            marginTop: 2,
            marginRight: 2,
            
            '&:hover': {
                borderColor: 'purple',
                backgroundColor: 'transparent',
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

export default C_button