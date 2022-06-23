import React from 'react'

const PhotoGallery = ({albums, getPage}) => {

        return(
                <div className='container_gallery'>
                        <div className='container_photos'>
                                {
                                        albums.map((item, i)=>{
                                                if (i === albums?.length - 1) return <><div key={item?.id} className='item_photo active'>{item?.id}</div> <div className='filter_author' onClick={getPage}>
                                                More About
                                        </div></>
                                                return <div key={item?.id} className='item_photo'>{item?.id}</div>
                                        }
                                        )
                                }
                        </div>
                </div>
        )
}

export {PhotoGallery}