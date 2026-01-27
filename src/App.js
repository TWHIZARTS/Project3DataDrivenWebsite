// import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Sites from './Sites.js';
import SiteDetails from './SiteDetails.js';

function App() {
  const [ data, setData ]= useState([]);

  //attempt to avoid page crashes
  const [ isLoading, setIsLoading ]= useState(true);


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
      setIsLoading(false);
    }
    fetchData()
  },[]);

  if(isLoading){
    return(
      <p>Loading...</p>
    )
  }

  return (
    <div className="App">
        <BrowserRouter>
        <section className="topbar"> 
          <h1><header><Link to = "/">America 250</Link></header></h1>
        </section>
          <Routes>
            <Route path="/" element={<Sites data = {data} />}/>
            <Route path="/:SiteNum" element={<SiteDetails data = {data} />}/>
          </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
