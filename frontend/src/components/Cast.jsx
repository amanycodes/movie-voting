import { Grid, Typography } from '@mui/material'
import React from 'react'

const Cast = (props) => {
  console.log(props.castArray)
  return (
    <Grid container spacing={3} sx={{
      paddingBottom: 3
    }}>
      {props.castArray.map((cast, index)=>{
        if(index < 5){
        return (<Grid item>
          <Typography sx={{
            color: 'white',
            fontSize: '16px',
            fontFamily: 'League Spartan'}}>{cast.name}</Typography>
        </Grid>)
        }
      })}
    </Grid>
  )
}

export default Cast