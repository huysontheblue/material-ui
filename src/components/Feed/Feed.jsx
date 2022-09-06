import { Box, Pagination } from '@mui/material'
import Post from '../Post/Post'
import React from 'react'

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Pagination 
        count={5} 
        color="secondary" 
      />
    </Box>
  )
}

export default Feed