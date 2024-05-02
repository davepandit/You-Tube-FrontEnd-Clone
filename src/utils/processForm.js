import axios from 'axios'
let base_url='https://youtube-v31.p.rapidapi.com'
const options = {
    url: base_url,
    params: {
      // relatedToVideoId: '7ghhRHRP6t4',
      // part: 'id,snippet',
      // type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromApi=async(url)=>{
    //the url in the parameter is the rest part of the url and is then used for the feed
    const {data}=await axios.get(`${base_url}/${url}`,options)
    return data
  }