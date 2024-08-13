import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { Box, Checkbox, styled } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import Share from "@mui/icons-material/Share";
import MoreVert from "@mui/icons-material/MoreVert";
import Comment from "@mui/icons-material/Comment";



import { FavoriteBorder } from "@mui/icons-material";

const PostCard = (props) => {

    return (
        <Card sx={{ margin: "30px 0" }}>
            <CardHeader
                avatar={<Avatar src={props.profileImage} />}
                title={props.name}
                subheader={new Date().toDateString()}
                action={
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                }
            />

            <CardMedia component="img" image={props.natureImage} height="20%" />


            <CardActions disableSpacing>
                <IconButton>
                    <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite  sx={{color:"red"}}/>}
                    />
                </IconButton>
                <IconButton>
                    <Comment />
                </IconButton>
                <IconButton>
                    <Share />
                </IconButton>
            </CardActions>
            <CardContent>
                <Typography variant="body-2" color='text.secondary' component='p'>
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PostCard