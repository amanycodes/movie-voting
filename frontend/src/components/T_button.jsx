import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const T_Button = (props) => {
    const size = props.size
    return( 
            <Link to= {`${props.path}`} style={{ textDecoration: 'none' }}>
            <Button variant="text"
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
                    fontSize: size, 
                    color: 'white', 
                    }}>{props.value}</Typography>
        </Button>
            </Link>
        
    )
}

export default T_Button