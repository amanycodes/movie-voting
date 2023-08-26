import { Typography } from '@mui/material'
import React from 'react'

const Cast = (castArray) => {
    const a = castArray.castArray
    const b = [{aman:'yadav'}, {yadav:'aman'}]
    console.log(b.length)
    setTimeout(()=>{console.log(a)}, 1000)
    
  return (
    <div>
        <Typography></Typography>
    </div>
  )
}

export default Cast