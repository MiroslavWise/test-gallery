import { useEffect, useState } from 'react';
import axios from 'axios'
import {PhotoGallery} from './Gallery/PhotoGallery'

function App() {
  const [albums, setAlbums] = useState([])
  const [page, setPage] = useState(1)
  console.log(albums)
  useEffect(()=>{
    axios.get(`https://api.unsplash.com/photos?page=${page}&per_page=9`,
      {
        headers:{
          Authorization: 'Client-ID nzS8A2gg-qkb_Rkk3GWVF3hqC_1-DYO7CnaOCsShYSU'
        }
        
      }
    )
      .then(data => {
        setAlbums([...albums ,...data?.data])
      })
      .catch(e=>{console.warn(e)})
  }, [page])

  const getPage = () => {
    setPage(page + 1)
  }

  const getAuthorPhoto = (username) => {
    console.log("username", username)
    setAlbums(albums.filter(item => item === username))
  }
  return (
   <>
    <PhotoGallery albums={albums} getPage={getPage} getAuthorPhoto={getAuthorPhoto}/>
   </>
  );
}

export default App;
