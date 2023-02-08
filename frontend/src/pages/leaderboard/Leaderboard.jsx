import { List, Paper } from "@mui/material"
import LeaderBoardItem from "../../components/LeaderBoardItem"

const LeaderBoard = () => {
    return(
        <Paper sx={{
            padding: '7rem',
            overflow: 'auto',
            maxHeight: '60vh',
            background: 'none'
        }}>
            <List sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4
            }}>
                <LeaderBoardItem />
                <LeaderBoardItem />
                <LeaderBoardItem />
                <LeaderBoardItem />
                <LeaderBoardItem />
            </List>    
        </Paper>
    )
}

export default LeaderBoard