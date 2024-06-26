import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'


const SideBar = ({selectedCategory,setselectedCategory}) => {
  return (
    <Stack
        direction='row'
        sx={{
            overflowY:'auto',
            height:{xs:'auto',md:'95%'},
            flexDirection:{md:'column'},
        }}
    >
        {categories.map((category)=>(
            <button
                className='category-btn'
                onClick={()=>(setselectedCategory(category.name))}
                style={{
                    color:'white',
                    backgroundColor:category.name===selectedCategory ? '#FC1503 ': null
                    
                }}
                key={category.name}
                // onClick={(e)=>(setselectedCategory(e.target))}
            >
                <span
                    style={{
                        color:category.name===selectedCategory ? 'white': 'red',
                        marginRight:'15px'
                    }}
                >{category.icon}</span>
                <span
                    style={{
                        opacity:category.name===selectedCategory ? '1' : '0.8'
                    }}
                >{category.name}</span>
            </button>
        ))}
        

    </Stack>
  )
}

export default SideBar