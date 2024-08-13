import { Box, Container, createTheme, Stack, ThemeProvider } from "@mui/material"
import ModeContext from "./context/ModeContext"
import Example from "./assets/example/Example"
import Feed from "./components/Feed"
import RightBar from "./components/RightBar"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import PostCard from "./components/PostCard"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import { Route, Routes } from "react-router-dom"
import Test from "./Pages/Test"
import { useState } from "react"
import AddPost from "./components/AddPost"

function App() {
  const [mode,setMode] = useState("dark");
  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <ModeContext.Provider value={{mode,setMode}}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          {/* <Example /> */}
          <Navbar mode={mode} setMode={setMode}/>
          <Stack sx={{minHeight:"100vh"}} direction="row" spacing={2} justifyContent={`space-between`} >
            <Sidebar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/test' element={<Test />} />
            </Routes>
            <RightBar />
          </Stack>
          <AddPost />
        </Box >
      </ModeContext.Provider>
    </ThemeProvider>
  )
}

export default App