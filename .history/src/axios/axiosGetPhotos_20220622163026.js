import axios from 'axios'

const getPhotos = (page) => {
        let albums = []
        axios.get(`https://api.unsplash.com/photos?page=${page}&per_page=9`, 
                {
                        headers:{
                                Authorization: 'Client-ID nzS8A2gg-qkb_Rkk3GWVF3hqC_1-DYO7CnaOCsShYSU'
                        }
                }
        )
                .then(data => {
                        albums.push(data?.data)
                })
                .catch(e=>{console.warn(e)})
        console.log('alb', albums)
}

export {getPhotos}