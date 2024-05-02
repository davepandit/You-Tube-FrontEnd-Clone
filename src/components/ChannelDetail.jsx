import React from 'react'
import { useState,useEffect } from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import {Videos,ChannelCard} from './'
import { fetchFromApi } from '../utils/processForm'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState()
  let [videos,setVideos]=useState([])
  let {id}=useParams()
  useEffect(()=>{
    const fetchResults = async () => {
      const data = await fetchFromApi(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  },[id])
  return (
    <Box 
      minHeight='95vh'
    
    >
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(0,36,35,1) 0%, rgba(9,115,121,1) 0%, rgba(0,245,238,1) 100%)',
          zIndex:10,
          height:'300px'
        }}/>
        <ChannelCard channelDetail={channelDetail} marginTop="-93px"/>
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail