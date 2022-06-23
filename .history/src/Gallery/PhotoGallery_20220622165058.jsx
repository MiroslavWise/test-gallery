import React from 'react'

const PhotoGallery = ({albums, getPage}) => {

        return(
                <>
                <div className=''></div>
                <button onClick={()=>{getPage()}}>About more</button>
                </>
        )
}

export {PhotoGallery}