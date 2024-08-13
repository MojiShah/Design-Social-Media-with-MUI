import { Add, Settings } from "@mui/icons-material"
import { Button, styled, Typography } from "@mui/material"

// const MyButton = styled(Button)({
//     backgroundColor: 'red',
//     color: 'whitesmoke',
//     margin: 5, //*8
//     transition: "all 0.8s",
//     "&:hover": {
//         backgroundColor: 'seagreen',
//         color: "#e7dbdb"
//     },
//     "&:disabled": {
//         backgroundColor: 'gray',
//         color: "#fff"
//     },
// })

const MyButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColors.main,
    color: 'whitesmoke',
    margin: 5, //*8
    transition: "all 0.8s",
    "&:hover": {
        backgroundColor: 'seagreen',
        color: "#e7dbdb"
    },
    "&:disabled": {
        backgroundColor: 'gray',
        color: "#fff"
    },
}))

const Example = () => {
  return (
    <div>
          <Button variant="text" disabled>Text</Button>
          <Button startIcon={<Settings />} color="secondary" variant="contained" size="large">Contained</Button>
          <Button startIcon={<Add />} color="info" variant="contained" size="large">Add new Post</Button>
          <Button variant="outlined" endIcon={<Add />} color='primary'>Add new Post</Button>

          <Typography variant="h3" component="h1" color='otherColors.main'>
            Moji jooooon
          </Typography>

          <Button variant="contained" 
        //   disabled
          sx={{
            backgroundColor:'red',
            color:'whitesmoke',
            margin:5, //*8
            transition:"all 0.8s",
            "&:hover":{
                backgroundColor:'seagreen',
                color:"#e7dbdb"
            },
            "&:disabled":{
                backgroundColor:'gray',
                color:"#fff"
            },
        }}>
            My unique button
          </Button>

          <MyButton>Moji1</MyButton>
          <MyButton>Just Daiejoonjan</MyButton>
    </div>
  )
}

export default Example