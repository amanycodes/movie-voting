import { Box, Typography } from "@mui/material";
import tileImg from "../assets/poster.jpg"
 
function Item(){
    return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        background: 'rgba(217,217,217,0.65)',
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
                fontSize: '2.3rem',
                marginRight: 6
            }}>1</Typography>
            <Box component='img' src={tileImg} sx={{
                width: '120px',
                height: '160px',
                borderRadius: '5px'
            }}></Box>
            <Typography sx={{
                fontFamily: 'League Spartan',
                fontWeight: 400,
                fontSize: '2.3rem',
                letterSpacing: 1.5,
                wordSpacing: 1
            }}>JOHN VICK</Typography>
        </Box>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingRight: 4,
            gap: '0px'
        }}>
            <Typography sx={{
                fontFamily: 'League Spartan',
                marginBottom: -1
            }}>VOTES</Typography>
            <Typography sx={{
                fontFamily: 'League Spartan',
                fontSize: '2.3rem',
                fontWeight: 400
            }}>50</Typography>
        </Box>
    </Box>
    )    
}

export default Item