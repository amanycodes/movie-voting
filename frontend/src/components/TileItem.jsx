
import Card from '@mui/material/Card';
import { CardContent, Typography } from "@mui/material";
import { Box } from '@mui/system';
import tileImg from '../assets/poster.jpg'
import { useContext } from 'react';
import { GlobalContext } from '../globalStates/State';

const TileItem = (props) => {
<<<<<<< HEAD
    function handleHover(){
      console.log(props.path)
=======
    const context = useContext(GlobalContext)
    
    const handleHover = ()=>{
        context.globalState.hoverState = props.path
        console.log(context.globalState.hoverState)
        props.changeId()
    }
    return(
        <Card onMouseOver={handleHover} sx={{
            width: 140,
            height: 200,
            display: 'inline-block',
            marginRight: 1,
            marginLeft: 1,
            
        }} raised={true}>
            <CardContent sx={{
                padding: 0,
                transition: '200ms ease-out',
                    '&:hover': {
                borderColor: 'white',
                transform: 'scale(1.08)'  
            }
                }}>
                <Box sx={{
                    alignItems: 'center',
                    width: '100%',
                    objectFit: 'contain',
                    margin: 0,
                    padding: 0,
                    
                }}
                component='img'
<<<<<<< HEAD
                src={`https://images.tmdb.org/t/p/original${props.img}`}
                onMouseOver={handleHover}
=======
                src={`https://image.tmdb.org/t/p/w500${props.img}`}
>>>>>>> 752b2be03757f9d88bd395801ee48b12c049040f
                />
            </CardContent>
        </Card>
    )
}

export default TileItem