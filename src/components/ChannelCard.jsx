import React from 'react'
import { Box,CardMedia,CardContent,Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({channelDetail,marginTop}) => {
  return (
    <Box
      sx={{
        boxShadow:'none',
        borderRadius:'20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:{xs:'356px',md:'320px'},
        height: '326px',
        margin: 'auto',
        marginTop,//this is done when we want reusable components but at the same time we also want to have a little bit of variation in styling is there
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            textAlign:'center',
            color:'#fff'
          }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{
              height:'180px',
              width:'180px',
              borderRadius:'50%',
              mb:2,
              border:'1px solid #e3e3e3'
            }}
          />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircleIcon sx={{
                        fontSize:14,
                        color:'gray',
                        ml:'5px'
                    }}/>
          </Typography>
        </CardContent>
        {channelDetail?.statistics?.subscriberCount &&
        (<Typography 
          style={{
            color:'white',
            textAlign:'center'
          }}
        >
          {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}
          Subscribers
        </Typography>)
        }

      </Link>

    </Box>
  )
}

export default ChannelCard