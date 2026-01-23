// import logo from './logo.svg';
import './App.css';
import {react, useEffect, useState} from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Sites from './Sites.js';
import SiteDetails from './SiteDetails.js';

function App() {
  const [ data, setData ]= useState([]);

useEffect(() =>{

    async function fetchData()
    {
    const url = "/BoyleSites.json";
    const response = await fetch(url);

    if (response.ok) 
      {
        const result = await response.json();
        // console.log(result);
        setData(result);
      }
      
    }
    fetchData()
  },[]);

  

  return (
    <div className="App">
      <>      
        <header>America 250</header>
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Sites data = {data} />}/>
            <Route path="/:SiteNum" element={<SiteDetails data = {data} />}/>
          </Routes>
        

       </BrowserRouter>  
    </>
     
    </div>
  );
}

export default App;
