import React, { useState, useEffect } from 'react';
import './style.css';

export default function Game() {
  useEffect(() => {
    console.log('game game');
  }, []);
  const [internalState, setInternalState] = useState(10);

  const updateState = () => {
    setInternalState((state) => state + 1);
    console.log('update internal');
  };

  return (
    <div>
      <button onClick={updateState}>Change internal</button>
      <h1>Game</h1>
      {console.log('game')}
    </div>
  );
}
