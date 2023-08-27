import { List, Paper, Typography } from "@mui/material"
import LeaderBoardItem from "../../components/LeaderBoardItem"
import { useContext } from "react"
import { MovieContext } from "../../globalContext/context/MovieContext"

const LeaderBoard = () => {
    const movieData = JSON.parse(localStorage.getItem('movieData'))
    const {movieObject} = useContext(MovieContext)
    const voteArray = movieData.results.map((item)=>{
        return movieObject.showType == 'movie' ? [item.vote_count, item.original_title, item.poster_path] : [item.vote_count, item.name, item.poster_path] 
    })
    voteArray.sort(sortFunction);

    function sortFunction(a, b) {
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (a[0] < b[0]) ? 1 : -1;
        }
    }
    console.log(voteArray)
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
                {voteArray.map((item, index)=>{
                    return <LeaderBoardItem count = {item[0]} name = {item[1]} number={index+1} image={item[2]}/>
                })}
            </List>    
        </Paper>
    )
}

export default LeaderBoard