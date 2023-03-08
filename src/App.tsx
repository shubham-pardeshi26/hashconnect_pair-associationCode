import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PairingWithHashpack } from './components/mainPageRender';
import { AssociationPage } from './associationFunction/associationPage';
import { getPairingData } from './retrive.Function';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={()=>{
          localStorage.clear();
        }}>clear localStorage</button>
        <button onClick={()=>{
          const r = window.localStorage.hashconnectData;
          const hashconnectSaveData = JSON.parse(r);
          let topicId = hashconnectSaveData.topic;
          console.log(topicId);
        }}>Get Topic ID</button>
        <button onClick={()=>{
            getPairingData();
        }}>
          Get Saving info
        </button>

        <PairingWithHashpack/>
        {/* <AssociationPage/> */}

      </header>
    </div>
  );
}

export default App;
