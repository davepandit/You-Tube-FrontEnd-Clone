import {Box} from "@mui/material"
import {BrowserRouter,Routes,Route,} from 'react-router-dom'
{/* import everything using one line y   making an extra index.js file */}
import {Navbar,ChannelDetail,Feed,VideoDetail,SearchFeed} from './components'

function App() {

  return (
    <>
    <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Feed/>}/>
          <Route path='/video/:id' element={<VideoDetail/>}/>
          <Route path='/channel/:id' element={<ChannelDetail/>}/>
          <Route path='/search/:searchTerm' element={<SearchFeed/>}/>

        </Routes>


      </Box>
    </BrowserRouter>
      
    </>
  )
}

export default App
