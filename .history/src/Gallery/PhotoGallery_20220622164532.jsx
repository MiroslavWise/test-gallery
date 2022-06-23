import React from 'react'

const PhotoGallery = ({albums, getPage}) => {

        return(
                <>
                <button onClick={()=>{getPage()}}>About more</button>
                </>
        )
}

export {PhotoGallery}