import { Mail, Notifications, VolunteerActivism } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkMode from './darkmode/DarkMode';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: "#fff",
  width: "40%",
  padding: "2px 10px",
  borderRadius: theme.shape.borderRadius
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: '10px',
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
      <StyledToolbar>

        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
          Mehran Monster
        </Typography>

        <VolunteerActivism sx={{ display: { xs: "block", sm: "none" } }} />

        <Search><InputBase placeholder='search...' /></Search>
        <DarkMode />

        <Icons >
          <Badge badgeContent={4} color='error'>
            <Mail sx={{ cursor: "pointer" }} />
          </Badge>

          <Badge badgeContent={10} color='error'>
            <Notifications sx={{ cursor: "pointer" }} />
          </Badge>

          <Avatar
            src="./img/profiles/Me.jpeg"
            alt='me'
            sx={{ width: 40, height: 40, cursor: "pointer" }}
            onClick={() => setOpen(true)}
          />

        </Icons>

        <UserBox >
          <Typography variant='span'>
            Moji
          </Typography>

          <Avatar
            src='./img/profiles/Me.jpeg'
            alt='Me'
            sx={{ width: 40, height: 40, cursor: "pointer" }}
            onClick={() => setOpen(true)}
          />

        </UserBox>

      </StyledToolbar>
      <Menu
        // id='demo-positioned-menu'
        // aria-labelledby='demo-positioned-button'
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        sx={{
          position: "absolute",
          top: { xs: '5.5%', sm: "6.5%" }
        }}
      >

        <Link
          to='/'
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MenuItem>
            Home
          </MenuItem>
        </Link>

        <Link
          to='/profile'
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MenuItem>
            My Account
          </MenuItem>
        </Link>

        <MenuItem>Profile Seen by</MenuItem>
        <MenuItem>Log out</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar