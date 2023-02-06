import { Grid } from "@mui/material"
import TileItem from "./TileItem"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, margin } from "@mui/system";

const Tiles = () => {
    return(
    <Grid container direction= 'row' spacing={3} alignItems = 'center'>
        <Grid item sx={{
            display: 'flex'
        }}>
                <ArrowBackIosNewIcon sx={{
                    padding: 2,
                    borderRadius: 10,
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    color: 'white', 
                    fontSize: 30,
                    '&:hover':{
                        color: 'white',
                        backgroundColor: 'rgba(128,0,128,.3)',
                        transition: '200ms'
                    }
                }} />
        </Grid>
        <Grid item >
            <TileItem />
        </Grid>
        <Grid item >
            <TileItem />
        </Grid>
        <Grid item >
            <TileItem />
        </Grid>
        <Grid item >
            <TileItem />
        </Grid>
        <Grid item >
            <TileItem />
        </Grid>
        <Grid item >
            <TileItem />
        </Grid>
        <Grid item >
            <TileItem />
        </Grid>
        <Grid item >
            <TileItem />
        </Grid>
        <Grid item sx={{
            display: 'flex'
        }}>
            
                <ArrowForwardIosIcon sx={{
                    padding: 2,
                    borderRadius: 10,
                marginTop: 'auto',
                marginBottom: 'auto',
                    color: 'white', 
                    fontSize: 30,
                    '&:hover':{
                        color: 'white',
                        backgroundColor: 'rgba(128,0,128,.3)',
                        transition: '200ms'
                    }
                }}/>
            
        </Grid>

        
    </Grid>
    )
}

export default Tiles
