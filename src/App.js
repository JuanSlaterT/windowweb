import './App.css';
import logo from './logo.svg';

import { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState();
  useEffect(() => {
    function handleMensaje(event) {
      console.log("RECIBI EVENTO")
      console.log(event.data)
      console.log(event.origin)
      if (event.origin === 'https://green-stone-0b44fcd0f.3.azurestaticapps.net') {
        
        const datosRecibidos = event.data;
        setData(datosRecibidos)
      }
    }

    window.addEventListener('message', handleMensaje);

    return () => {
      window.removeEventListener('message', handleMensaje);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          {data ? JSON.stringify(data) : `Edit <code>src/App.js</code> and save to reload.`}
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
