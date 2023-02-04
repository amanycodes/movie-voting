
import Card from '@mui/material/Card';
import { CardContent, Typography } from "@mui/material";
import { Box } from '@mui/system';
import tileImg from '../assets/poster.jpg'

const TileItem = () => {
    return(
        <Card sx={{
            width: 160,
            height: 240,

            transition: '200ms ease-out',
            '&:hover': {
                width: 162,
                height: 242,
                border: 3,
                borderColor: 'white'
                
            }
        }} raised={true}>
            <CardContent sx={{padding: 0}}>
                <Box sx={{
                    alignItems: 'center',
                    width: '100%',
                    objectFit: 'contain',
                    margin: 0,
                    padding: 0
                }}
                component='img'
                src={tileImg}
                />
            </CardContent>
        </Card>
    )
}

export default TileItem