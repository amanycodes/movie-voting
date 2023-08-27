import { Box, Typography } from "@mui/material";
import tileImg from "../assets/poster.jpg"
 
function Item(props){
    return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        background: 'rgba(217,217,217,0.8)',
        borderRadius: '10px',
        margin: '0rem 10rem',
        padding: '0.4rem 3rem'
    }}>
        <Box 
        sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4
        }}>
            <Typography sx={{
                fontFamily: 'League Spartan',
                fontWeight: 400,
                fontSize: '2rem',
                marginRight: 6
            }}>{props.number}</Typography>
            <Box component='img' src={`https://image.tmdb.org/t/p/w500${props.image}`} sx={{
                width: '120px',
                height: '160px',
                borderRadius: '10px',
                objectFit: 'cover',
            }}/>
            <Typography sx={{
                fontFamily: 'League Spartan',
                fontWeight: 400,
                fontSize: '2rem',
                letterSpacing: 1.5,
            }}>{props.name}</Typography>
        </Box>
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems:'center',
            paddingRight: 4,
            gap: '0px'
        }}>
            <Typography sx={{
                fontSize: '1rem',
                fontFamily: 'League Spartan',
                paddingRight: '15px'
            }}>VOTES</Typography>
            <Typography sx={{
                color: 'green',
                fontFamily: 'League Spartan',
                fontSize: '1.5rem',
                fontWeight: 400
            }}>{props.count}</Typography>
        </Box>
    </Box>
    )    
}

export default Item