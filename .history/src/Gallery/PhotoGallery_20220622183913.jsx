import React from 'react'

const PhotoGallery = ({albums, getPage}) => {
        const style =(img)=> {
                return{
                        backgroundImage: `url(${img})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                }
                
        }
        return(
                <div className='container_gallery'>
                        <div className='filter_buttons'>
                                {
                                        albums.map(({user}) => {
                                                return<div className='button'>{user?.username}</div>
                                        } )
                                }
                        </div>
                        <div className='container_photos'>
                                {
                                        albums.map((item, i)=>{
                                                if (i === albums?.length - 1) return <>
                                                        <div key={item?.id} className='item_photo' style={style(item?.urls?.small)}>
                                                                <div className="centered">{item?.user?.username}</div>
                                                                <div className="description">{item?.user?.bio}</div>
                                                        </div> 
                                                        <div className='item_photo' onClick={getPage}>
                                                                More About
                                                        </div>
                                                </>
                                                return <div key={item?.id} className='item_photo' style={style(item?.urls?.small)}>
                                                        <div className="centered">{item?.user?.username || item?.user?.bio}</div>
                                                        <div className="description">{item?.user?.bio}</div>
                                                </div>
                                        }
                                        )
                                }
                        </div>
                </div>
        )
}

export {PhotoGallery}