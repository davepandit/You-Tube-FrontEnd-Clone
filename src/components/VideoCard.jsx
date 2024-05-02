import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoChannelTitle,demoChannelUrl,demoProfilePicture,demoThumbnailUrl,demoVideoTitle,demoVideoUrl } from '../utils/constants';
import {useTheme} from '@mui/material/styles';

const VideoCard = ({video:{id:{videoId},snippet}}) => {
    const theme = useTheme()
  return (
    <Card sx={{
        boxShadow:'none',
        borderRadius:0,
        width:{
            md:'320px',
            xs:'300px'
        }, 
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }
    }}>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{
                    height:180,width:358,
                }}
                component="img"
                
            />
            <CardContent
                sx={{
                    backgroundColor:'#1e1e1e',
                    height:'106px',
                }}
            >
                <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
                    <Typography 
                        variant='subtitle1'
                        fontWeight='bold'
                        color='white'
                    
                    >
                        {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`: demoChannelUrl}>
                    <Typography 
                        variant='subtitle2'
                        fontWeight='bold'
                        color='gray'
                        style={{
                            display:'flex',
                            flexDirection:'row',
                            alignItems:'center'
                        }}
                    
                    >
                        {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
                        <CheckCircleIcon sx={{
                            fontSize:12,
                            color:'gray',
                            ml:'5px'
                        }}/>
                    </Typography>
                </Link>
            </CardContent>
        
        
        </Link>
    </Card>
  )
}

export default VideoCard