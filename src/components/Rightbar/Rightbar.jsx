import { Box } from '@mui/material'
import React from 'react'
import List from '../List/List'

const Rightbar = () => {
  return (
    <Box 
      flex={2} p={2}
      sx={{ display: {xs: "none", sm:"none", md:"block"}}}
    >
      <List />
    </Box>
  )
}

export default Rightbar;
