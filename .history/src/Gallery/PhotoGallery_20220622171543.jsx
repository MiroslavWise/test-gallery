import React from 'react'

const PhotoGallery = ({albums, getPage}) => {

        return(
                <div className='container_gallery'>
                        <div className='filter_author' onClick={getPage}>
                                More About
                        </div>
                        <div className='container_photos'>
                                {
                                        albums.map(i=><div className='grid__item'>asdf</div>)
                                }
                        </div>
                </div>
        )
}

export {PhotoGallery}