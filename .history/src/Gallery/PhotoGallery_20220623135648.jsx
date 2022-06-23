import React from 'react'

const PhotoGallery = ({albums, photos, getPage, getAuthorPhoto, getDeletePhtoto}) => {
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
        const cGreen = {
                color: 'green'
        }
        // console.log([...document.getElementsByClassName('item_photo')])
        // console.log('id: ', photos?.map(item => document?.getElementById(`${item?.id}`)?.addEventListener('click', (e)=>{ console.log('click', [...e?.srcElement?.classList].includes('del') ? e?.srcElement?.classList.remove('del') : e?.srcElement?.classList.add('del'))})))

        React.useLayoutEffect(()=>{
                window.requestAnimationFrame(()=>{
                        // albums?.map(item => document?.getElementById(`${item?.user?.username}`)?.addEventListener('click', ()=>{console.log('click')}))
                        document.getElementById('select')?.addEventListener('change', (e)=> {console.log('on', e?.querySelector(`option[value="${e.value}"]`))})
                })
                window.requestAnimationFrame(()=>{
                        albums?.map(item => document?.getElementById(`${item?.id}`)?.addEventListener('click', (e)=>{[...e?.target?.classList].includes('del') ? e?.target?.classList.remove('del') :e?.target?.classList.add('del')}))                        
                })
                
        }, [albums, photos])
        document.addEventListener('keydown', (event)=>{
                if(event.code === 'Delete' || event.code === 'Backspace'){
                        [...document.getElementsByClassName('del')].forEach(item => getDeletePhtoto(item?.id))
                }
        }, false)
        const findOption = (select) => {
                const option = select?.querySelector(`option[value="${select.value}"]`)
                console.log('option: ',option)
        }
        console.log(window.outerWidth)
        return(
                <div className='container_gallery'>
                        <div className='filter_buttons'>
                                {
                                        window.outerWidth>1024
                                        &&
                                        <>
                                        <div 
                                                className='button' 
                                                style={albums.length === photos.length ? cGreen : {}}
                                                onClick={()=>{ getAuthorPhoto(null)}}
                                        >
                                                Все авторы
                                        </div>
                                                {
                                                        albums.map(({user}) => {
                                                                return<div 
                                                                        className='button' 
                                                                        style={photos.every(item => item?.user?.username === user?.username) ? cGreen : {}}
                                                                        onClick={()=>{ getAuthorPhoto(user?.username) }}>
                                                                                {user?.username}
                                                                        </div>
                                                        })
                                                }
                                        </>
                                        ||
                                        <>
                                        <select
                                                onchange='findOption(this)'
                                                id='select'
                                        >
                                                <option
                                                        value={null}
                                                        onClick={()=>{ getAuthorPhoto(null)}}
                                                >
                                                        Все авторы
                                                </option>
                                                {
                                                        albums.map(({user}) => {
                                                                return<option 
                                                                                id={`${user?.username}`}
                                                                                value={user?.username}
                                                                                className='button' 
                                                                        >
                                                                                {user?.username}
                                                                        </option>
                                                })
                                                }
                                        </select>
                                        </>
                                }
                        
                        </div>
                        <div className='container_photos'>
                                {
                                        photos.map((item, i)=>{
                                                return <div 
                                                        key={item?.id} 
                                                        className='item_photo' 
                                                        style={style(item?.urls?.small)} 
                                                        id={item?.id}
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
                                                        <div className="description"><p className='eclips'>{item?.user?.bio || 'Нет описания'}</p></div>
                                                </div>
                                        }
                                        )
                                }
                                {
                                        albums.length === photos.length
                                        &&
                                        <div className='item_photo_more' onClick={getPage}>
                                                <div className='more'>More About</div>
                                        </div>
                                }
                                
                        </div>
                </div>
        )
}

export {PhotoGallery}