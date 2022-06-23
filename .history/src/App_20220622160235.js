import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [albums, setAlbums] = useState([])
  useEffect(()=>{
    axios.get('https://api.unsplash.com/photos?page=0&per_page=9', 
      {
        headers:{
          Authorization: 'Client-ID nzS8A2gg-qkb_Rkk3GWVF3hqC_1-DYO7CnaOCsShYSU'
        }
        
      }
    )
      .then(data => {console.log(data)})
      .catch(e=>{console.warn(e)})
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
