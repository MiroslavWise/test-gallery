import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [albums, setAlbums] = useState([])
  const [page, setPage] = useState(0)
  console.log(page)
  let count = 2
  console.log(albums)
  useEffect(()=>{
    axios.get(`https://api.unsplash.com/photos?page=${page}&per_page=9`, 
      {
        headers:{
          Authorization: 'Client-ID nzS8A2gg-qkb_Rkk3GWVF3hqC_1-DYO7CnaOCsShYSU'
        }
        
      }
    )
      .then(data => {
        setAlbums(Object.entries(albums, data?.data))
      })
      .catch(e=>{console.warn(e)})
  }, [page])
  const getPage = () => {
    setPage(page + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={albums[count]?.urls?.small} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={()=> getPage()}>About more</button>
      </header>
    </div>
  );
}

export default App;
