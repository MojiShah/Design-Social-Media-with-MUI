import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box"
import Checkbox from "@mui/material/Checkbox";
import Favorite from "@mui/icons-material/Favorite";
import Share from "@mui/icons-material/Share";
import MoreVert from "@mui/icons-material/MoreVert";
import Comment from "@mui/icons-material/Comment";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import imagesData from "../data/imagesData";
import { FavoriteBorder } from "@mui/icons-material";

const PostCard = (props) => {

    return (
        <Card>
            <CardHeader
                avatar={<Avatar src={imagesData[4].profileImage} />}
                title="Mojtaba"
                subheader={new Date().toDateString()}
                action={
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                }
            />
            {/* <CardMedia component="img" image={nature1} sx={{height:294}} /> */}
            <Swiper
                style={{ width: "100%", height: "50vh" }}
                modules={[Navigation, Pagination, Keyboard, Autoplay]}
                navigation
                pagination
                loop={true}
                keyboard={true}
                autoplay={{ delay: 2000 }}
            >
                {props.images.map(image =>
                    <SwiperSlide key={image.id}>
                        <CardMedia component="img" image={image.contentImage} height="100%" />
                    </SwiperSlide>
                )}
            </Swiper>
            <CardActions disableSpacing>
                <IconButton>
                    <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite sx={{ color: "red" }} />}
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