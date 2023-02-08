
import Card from '@mui/material/Card';
import { CardContent, Typography } from "@mui/material";
import { Box } from '@mui/system';
import tileImg from '../assets/poster.jpg'

const TileItem = (props) => {
    function handleHover(){
      console.log(props.path)
    }
    return(
        <Card sx={{
            width: 140,
            height: 200,
            display: 'inline-block',
            transition: '200ms ease-out',
            marginRight: 1,
            marginLeft: 1,
            '&:hover': {
                border: 3,
                borderColor: 'white',
                scale: 10
                
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
                src={`https://images.tmdb.org/t/p/original${props.img}`}
                onMouseOver={handleHover}
                />
            </CardContent>
        </Card>
    )
}

export default TileItem