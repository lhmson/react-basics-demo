import React, { useState, useEffect } from 'react';
import './style.css';
import Game from './Game';

export default function App() {
  const [externalState, setExternalState] = useState(0);
  useEffect(() => {
    console.log('big big')
  },[])
  const updateState = () => {
    setExternalState((state) => state + 1);
    console.log('update external');
  };
  return (
    <div>
      <button onClick={updateState}>Change external</button>
      <h1>Hello</h1>
      <Game />
      {console.log('big')}
    </div>
  );
}
