import React from 'react'
import { Stack, Typography } from '@mui/material'
import {Box} from '@mui/material'
import {SideBar} from './index'
import {Videos} from './index'
import { fetchFromApi } from '../utils/processForm'
import { useEffect,useState } from 'react'
const Feed = () => {
  let [selectedCategory,setselectedCategory]=useState('New')
  let [videos,setVideos]=useState([])

  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>(setVideos(data.items)))
  },[selectedCategory])
  return (
    <>
      <Stack sx={{
        flexDirection:{
          sm:'column',
          md:'row'
        }
      }}>
        <Box sx={{
          height:{
            sm:'auto',
            md:'92vh',    
          },
          borderRight:"1px solid #3d3d3d",
          px:{sm:0,md:2}
        }}>
          <SideBar 
            selectedCategory={selectedCategory}
            setselectedCategory={setselectedCategory}
          />
          <Typography        
          variant='body2'
          className='copyright'
          sx={{
            color:'white',
            mt:1.5
          }}
        
        >

            Copyright 2023 MyTube
          </Typography>

        </Box>
        <Box 
          p={2}
          sx={{
            overflowY:'auto',
            height:'90vh',
            flex:2,
          
          }}
          >
        
          <Typography variant='h4' fontWeight='bold' mb={2} sx={{
            color:'white'
          }} >
            {selectedCategory} <span style={{
              color:'#FC1503'
            }}>videos</span>
          </Typography>
          <Videos videos={videos}/>
        </Box>

        

      </Stack>
    </>
  )
}

export default Feed