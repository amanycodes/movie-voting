import { Grid } from "@mui/material"
import TileItem from "./TileItem"

const Tiles = () => {
    return(
    <Grid container direction= 'row' spacing={2}>
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
        
    </Grid>
    )
}

export default Tiles
