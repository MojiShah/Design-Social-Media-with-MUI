import React from 'react';
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

import imagesData from '../data/imagesData'

const RightBar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        <Typography variant="h6" fontWeight={300} marginBottom={2}>
          Online Friends
        </Typography>

        <AvatarGroup max={5} sx={{ marginLeft: "10px", justifyContent: "flex-end" }}>
          <Avatar sx={{ width: 60, height: 60 }} />
          {imagesData.map(image =>
            <Avatar
              key={image.id}
              src={image.profileImage}
              alt='profileImage'
              sx={{ width: 60, height: 60 }}
            />
          )}
          <Avatar sx={{ width: 60, height: 60 }} />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={300} mb={2} mt={2}>
          latest Posts
        </Typography>
        <ImageList
          cols={3} rowHeight={100} sx={{padding:"10px"}}
        >
          <ImageListItem>
            <img src="./img/nature/spring.png" alt="spring" />
          </ImageListItem>
          <ImageListItem>
            <img src="./img/nature/river.png" alt="river" />
          </ImageListItem>
          <ImageListItem>
            <img src="./img/nature/Mountains.png" alt="Mountains" />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={300} mb={2} mt={2}>
          latest Conversations
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="./img/profiles/Kate.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="./img/profiles/Me.jpeg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="./img/profiles/John.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>

      </Box>
    </Box>
  )
}

export default RightBar