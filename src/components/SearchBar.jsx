import React from 'react'
import { useState } from 'react'
import {Paper,IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState('')
  let navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      setsearchTerm('')
    }

  }
  return (
    <Paper 
      component='form'
      onSubmit={handleSubmit}
      sx={{
        borderRadius:20,
        border:'1px solid #e3e3e3',
        pl:2,
        boxShadow:'none',
        mr:{sm:5}//here this syntax allows us to write inline responsive styles
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e)=>(setsearchTerm(e.target.value))}
      />
      <IconButton
        type='submit'
        sx={{
          p:'10px',
          color:'red'

        }}
      >
        <SearchIcon/>

      </IconButton>

    </Paper>
  )
}

export default SearchBar