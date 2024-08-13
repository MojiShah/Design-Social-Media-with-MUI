import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from "@mui/material"
import { Add as AddIcon, DateRange, Image, PersonAdd, SentimentDissatisfied, SentimentVerySatisfied, VideoCameraBack } from "@mui/icons-material"
import ModeContext from "../context/ModeContext";
import { useContext, useEffect, useRef, useState } from "react"

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px"
})

const AddPost = () => {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [date, setDate] = useState('');
  const uploadInputRef = useRef(null);
  const myTheme = useContext(ModeContext);
  useEffect(() => {
    console.log('Images Uploded =>', images);
    console.log('Videos Uploded =>', videos);
  }, [images, videos])
  return (
    <>
      <Tooltip
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 28px)", md: 30 }
        }}
        onClick={() => setOpen(true)}
      >
        <Fab color="primary" aria-label="add" >
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={{ xs: "80%", md: 700 }}
          minHeight={280}
          bgcolor={myTheme.mode === "light" ? "#fff" : "#000"}
          color={myTheme.mode === "light" ? "#000" : "#fff"}
          p={3}
          borderRadius={5}
        >

          <Typography variant="h6" color="gray" textAlign={`center`}>Create Post</Typography>

          <UserBox>
            <Avatar
              src="./img/profiles/Me.jpeg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">Mojtaba Charchian</Typography>
          </UserBox>

          <TextField
            sx={{ width: "100%" }}
            id="filled-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="filled"
          />

          <Stack direction="row" gap={1} mt={1} mb={2}>
            <SentimentVerySatisfied color="warning" />
            <SentimentDissatisfied color="error" />
            <PersonAdd color="primary" />
          </Stack>

          <Stack direction="column" gap={1} alignItems="center" justifyContent="center" paddingLeft={10}>
            <ButtonGroup variant="outlined" aria-label="Basic button group" fullWidth >
              <Button variant="raised" size="large"
                color="primary">
                <Image color="error" />
                <input
                  type="file"
                  accept="image/*"
                  id="icon-button-photo"
                  multiple
                  onChange={e => setImages(e.target.files[0])}
                  style={{ marginLeft: "20px" }}
                />
              </Button>
            </ButtonGroup>

            <ButtonGroup variant="outlined" aria-label="Basic button group" fullWidth>
              <Button variant="raised">
                <VideoCameraBack color="secondary" />
                <input
                  accept="video/*"
                  capture="camcorder"
                  id="icon-button-video"
                  multiple
                  type="file"
                  onChange={e => setVideos(e.target.files[0])}
                  style={{ marginLeft: "20px" }}
                />
              </Button>
            </ButtonGroup>
          </Stack>

          <ButtonGroup variant="outlined" aria-label="Basic button group" fullWidth>
            <Button onClick={() => setDate(new Date().toDateString())}>
              <DateRange />
            </Button>

            <Button>
              Post
            </Button>
          </ButtonGroup>

        </Box>
      </StyledModal>
    </>
  )
}

export default AddPost