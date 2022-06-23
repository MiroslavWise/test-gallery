import React from 'react'

const PhotoGallery = ({albums, getPage}) => {
        const style =(img)=> {
                return{
                        backgroundImage: 'url(img)',
                        objectFit: 'cover'
                }
                
        }
        return(
                <div className='container_gallery'>
                        <div className='container_photos'>
                                {
                                        albums.map((item, i)=>{
                                                if (i === albums?.length - 1) return <>
                                                <div key={item?.id} className='item_photo active'>{item?.id}</div> <div className='item_photo' onClick={getPage}>
                                                More About
                                        </div></>
                                                return <div key={item?.id} className='item_photo' style={style(item?.urls?.small)}>
                                                </div>
                                        }
                                        )
                                }
                        </div>
                </div>
        )
}

export {PhotoGallery}