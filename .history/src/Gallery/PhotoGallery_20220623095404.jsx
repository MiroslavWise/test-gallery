import React from 'react'

const PhotoGallery = ({albums, photos, getPage, getAuthorPhoto}) => {
        const style =(img)=> {
                return{
                        backgroundImage: `url(${img})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                }
        }
        const shadow = {
                boxShadow: '0px 0px 10px rgb(7, 243, 19)'
        }

        return(
                <div className='container_gallery'>
                        <div className='filter_buttons'>
                        <div 
                                className='button' 
                                onClick={()=>{ getAuthorPhoto(null)}}>
                                        Все авторы
                        </div>
                                {
                                        albums.map(({user}) => {
                                                return<div 
                                                        className='button' 
                                                        onClick={()=>{ getAuthorPhoto(user?.username) }}>
                                                                {user?.username}
                                                        </div>
                                        })
                                }
                        </div>
                        <div className='container_photos'>
                                {
                                        photos.map((item, i)=>{
                                                if (i === albums?.length - 1) return <>
                                                        <div 
                                                                key={item?.id} 
                                                                className='item_photo' 
                                                                style={style(item?.urls?.small)}
                                                                onClick={(e)=>{
                                                                        [...e.target.classList].some(i=>i !== 'del') && [...e.target.classList].push('del')
                                                                }}
                                                        >
                                                                <div 
                                                                        className="centered" 
                                                                        onClick={(event)=>{ 
                                                                                getAuthorPhoto(item?.user?.username) 
                                                                                event.stopPropagation()
                                                                        }}
                                                                >
                                                                        {item?.user?.username}
                                                                </div>
                                                                <div className="description">{item?.user?.bio}</div>
                                                        </div> 
                                                        <div className='item_photo ' onClick={getPage}>
                                                                <div className='more'>More About</div>
                                                        </div>
                                                </>
                                                return <div key={item?.id} className='item_photo' style={style(item?.urls?.small)}>
                                                        <div className="centered" onClick={()=>{ getAuthorPhoto(item?.user?.username) }}>{item?.user?.username}</div>
                                                        <div className="description"><p className='eclips'>{item?.user?.bio}</p></div>
                                                </div>
                                        }
                                        )
                                }
                        </div>
                </div>
        )
}

export {PhotoGallery}