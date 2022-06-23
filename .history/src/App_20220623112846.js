import { useEffect, useState } from 'react';
import axios from 'axios'
import {PhotoGallery} from './Gallery/PhotoGallery'

function App() {
  const [albums, setAlbums] = useState([])
  const [photos, setPhotos] = useState([])
  console.log("photos", photos)
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
  useEffect(()=>{
    setPhotos(albums)
  }, [albums])

  const getPage = () => {
    setPage(page + 1)
  }

  const getAuthorPhoto = (username) => {
    username ? setPhotos(albums.filter(item => item?.user?.username === username)) : setPhotos(albums)
  }

  const getDeletePhtoto = (i) => {
    setAlbums(albums?.filter((item, index) => item?.id !== i))
  }
  return (
   <>
    <PhotoGallery albums={albums} photos={photos} getPage={getPage} getAuthorPhoto={getAuthorPhoto} getDeletePhtoto={getDeletePhtoto} />
   </>
  );
}

export default App;
