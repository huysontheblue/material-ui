import React from 'react'
import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar"
import Feed from "./Feed/Feed"
import Rightbar from "./Rightbar/Rightbar"
import Add from './Add/Add'
import Footer from './Footer/Footer'
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import { useState } from "react"

function Layout() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Header />
        <Stack direction="row" spacing={2} justifyContent='space-between'>
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default Layout