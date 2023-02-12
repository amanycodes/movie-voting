import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import "../fonts/LeagueSpartan.ttf"



const C_button = (props) => {
    const size = props.size
    return( 
            <Button 
            variant="contained"
            onClick={props.onClick}
            sx= {{
            borderRadius:7,
            border: 2,
            padding: 0,
            paddingLeft: 3,
            paddingRight: 3,
            paddingTop: .5,
            paddingBottom: 0,
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
                    fontFamily: 'League Spartan' 
                    }}>{props.value}</Typography>
        </Button>
        
    )
}

export default C_button