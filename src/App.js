import logo from './logo.svg';
import './App.css';
import {useEffect} from "react"
function App() {

useEffect(() =>{
    async function fetchData()
    {

    const url = "/BoyleSites.json";
    const response = await fetch(url);

    if (response.ok) 
      {
      const result = await response.json();
      console.log(result);
      }
    }
    fetchData()
  },[]);

  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
     
    </div>
  );
}

export default App;
