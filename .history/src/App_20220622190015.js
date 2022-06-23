import { useEffect, useState } from 'react';
import axios from 'axios'
import {PhotoGallery} from './Gallery/PhotoGallery'

function App() {
  const [albums, setAlbums] = useState([])
  const [photos, setPhotos] = useState([])
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
        setPhotos([])
        setPhotos([...albums ,...data?.data])
      })
      .catch(e=>{console.warn(e)})
  }, [page])

  const getPage = () => {
    setPage(page + 1)
  }

  const getAuthorPhoto = (username) => {
    setAlbums([])
    username ? setPhotos(albums.filter(item => item?.user?.username === username)) : setPhotos(albums)

  }
  return (
   <>
    <PhotoGallery albums={albums} photos={photos} getPage={getPage} getAuthorPhoto={getAuthorPhoto}/>
   </>
  );
}

export default App;
