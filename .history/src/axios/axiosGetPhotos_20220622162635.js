import axios from 'axios'

const getPhotos = (page) => {
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
}