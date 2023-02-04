
import Card from '@mui/material/Card';
import { CardContent, Typography } from "@mui/material";

const TileItem = () => {
    return(
        <Card sx={{
            width: 150,
            height: 200,
        }} raised={true}>
            <CardContent>
                <Typography sx={{
                    textAlign: 'center'
                }}>Hello</Typography>
            </CardContent>
        </Card>
    )
}

export default TileItem