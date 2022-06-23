import React from 'react'

const PhotoGallery = ({albums, getPage}) => {

        return(
                <div className='container_gallery'>
                        <div className='filter_author' onClick={getPage}>
                                More About
                        </div>
                        <div className='container_photos'>
                                {
                                        albums.map(i=><div key={i?.id} className='grid__item'>{i?.id}</div>)
                                }
                        </div>
                </div>
        )
}

export {PhotoGallery}