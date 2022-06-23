import React from 'react'

const PhotoGallery = ({albums, getPage}) => {

        return(
                <div className='container_gallery'>
                        <div className='filter_author' onClick={getPage}>
                                More About
                        </div>
                        <div className='container_photos'>
                                {
                                        albums.map((item, i)=>{
                                                if (i%3===0) return <div key={item?.id} className='item_photo active'>{item?.id}</div>
                                                return <div key={item?.id} className='item_photo'>{item?.id}</div>
                                        }
                                        )
                                }
                        </div>
                </div>
        )
}

export {PhotoGallery}