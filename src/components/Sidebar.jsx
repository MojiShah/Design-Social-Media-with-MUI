import { AccountBox, Group, Home, Note, NoteAdd, NoteAlt, Person, Settings, Storefront } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: 'block' } }}
    >
      <Box position="fixed">
        <List>

          <Link
            to='/'
            style={{ display: "flex", textDecoration: "none", color: "inherit", alignItems: "center", cursor: "pointer" }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Homepage" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link
            to='/test'
            style={{ display: "flex", textDecoration: "none", color: "inherit", alignItems: "center" }}
          >
            <ListItem disablePadding>
              <ListItemButton component="a" href='#'>
                <ListItemIcon>
                  <NoteAlt />
                </ListItemIcon>
                <ListItemText primary="Pages" />
              </ListItemButton>
            </ListItem>
          </Link>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Market" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <Link
            to='/profile'
            style={{ display: "flex", textDecoration: "none", color: "inherit", alignItems: "center" }}
          >
            <ListItem disablePadding>
              <ListItemButton component="a" href='#' >
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar