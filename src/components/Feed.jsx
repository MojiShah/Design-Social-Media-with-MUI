import { Box } from '@mui/material'
import PostCard from './PostCard';
import Post from './Post'
import imagesData from '../data/imagesData';
import { useState } from 'react';

const Feed = () => {
  const [posts, setPosts] = useState(imagesData);
  return (
    <Box flex={4} p={2} overflow="hidden">
      {<PostCard images={imagesData} /> }
      {posts.map(image =>
        <Post
          key={image.id}
          natureImage={image.contentImage}
          profileImage={image.profileImage}
          name={image.name}
        />
      )}
    </Box>
  )
}

export default Feed