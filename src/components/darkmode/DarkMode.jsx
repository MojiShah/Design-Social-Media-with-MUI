import { ModeNight, WbSunny } from '@mui/icons-material'
import { Avatar, Box, ListItem, ListItemButton, ListItemIcon, Stack } from '@mui/material'
import ModeContext from '../../context/ModeContext'
import { useContext } from 'react'

const DarkMode = () => {
    const themeContext = useContext(ModeContext);
    return (
        <Box>
            <ListItem disablePadding>
                <ListItemButton component="a" href='#' >
                    <ListItemIcon>
                        {
                            themeContext.mode === "light"
                                ? <Stack direction="row" spacing={0.5} alignItems={"center"}>
                                    <Avatar
                                        src="./img/darkMode/dark-mode-button.png"
                                        alt='me'
                                        sx={{ width: 50, height: 30, cursor: "pointer" }}
                                        onClick={() => themeContext.setMode("dark")}
                                    />
                                    <ModeNight sx={{ color: "#fff" }} />
                                </Stack>
                                :
                                <Stack direction="row" spacing={0.5} alignItems={"center"}>
                                    <WbSunny />
                                    <Avatar
                                        src="./img/darkMode/light-mode-button.png"
                                        alt='me'
                                        sx={{ width: 50, height: 30, cursor: "pointer" }}
                                        onClick={() => themeContext.setMode("light")}
                                    />
                                </Stack>
                        }

                    </ListItemIcon>
                </ListItemButton>
            </ListItem>
        </Box>
    )
}

export default DarkMode