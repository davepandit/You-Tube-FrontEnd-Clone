import React from 'react'
import { useState,useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import { Stack,Box,Typography } from '@mui/material';
import ReactPlayer from 'react-player'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Videos} from './'
import { fetchFromApi } from '../utils/processForm';
const VideoDetail = () => {
  const [videoDetail, setvideoDetail] = useState({})
  const {id}=useParams()
  useEffect(()=>{
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setvideoDetail(data.items[0]))
  },[id])
  return (
    <Box minHeight='95vh'>
      <Stack direction={{
        xs:'column',
        md:'row'
      }}>
        <Box flex={1}>
          <Box sx={{
            width:'100%',
            position:'sticky',
            top:'86px'
          }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls
            />
            <Typography style={{
              color:'white'
            }}>
              {/* {videoDetail.snippet.title} */}
            </Typography>

          </Box>
        </Box>

      </Stack>

    </Box>
  )
}

export default VideoDetail