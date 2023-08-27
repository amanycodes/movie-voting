import React from 'react'
import { LinearProgress } from '@mui/material'

const LinerLoader = () => {
  return (
    <div style={{
        height: '100vh',
        width: '100%',
        backgroundColor: 'rgba(37,37,37)'
    }}>
        <LinearProgress color="secondary" />
    </div>
  )
}

export default LinerLoader