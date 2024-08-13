import { Box, ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import imagesData from "../data/imagesData";

const Profile = () => {
  return (
    <Box sx={{ height: "auto" }} flex={4} p={2} overflow="hidden">
      <Stack direction="row" spacing={2} justifyContent={`flex-start`} gap={5} margin={`40px 0`}>
        <Box sx={{ width: 100, height: 100 }}>
          <img
            src={imagesData[4].profileImage}
            alt={imagesData[4].name}
            loading="lazy"
            style={{ width: "100%", borderRadius: "50%" }}
          />
        </Box>

        <Typography fontSize={50}>
          Mojtaba
        </Typography>

      </Stack>
      <Box
        // sx={{
        //   xs: { width: 500, height: 450 },
        //   sm: { width: "100%", minHeight: "100vh" }
        // }}
      >
        <ImageList
          // sx={{
          //   xs: { width: 500, height: 450 },
          //   sm: { width: "100%", height: "100vh" }
          // }}
          cols={3}
          rowHeight="auto"
        >
          {imagesData.map((item) => (
            <ImageListItem key={item.id}>
              <img
                srcSet={item.contentImage}
                src={item.contentImage}
                alt={item.name}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  )
}

export default Profile