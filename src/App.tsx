import { useState } from 'react';
import './App.css';
import kittyGif from './assets/kitty.gif'

function App() {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [showModal, setShowModal] = useState(false);

  const moveNoButton = () => {
    const newPosition = {
      top: Math.random() * window.innerHeight,
      left: Math.random() * window.innerWidth
    };
    setNoButtonPosition(newPosition);
  };

  return (
    <>
      <h2>Is RaniaBania Cute?</h2>
      <div className='butCont'>
        <button className='yesBut' onClick={() => setShowModal(true)}>YES</button>
        <button 
          className='noBut' 
          onMouseEnter={moveNoButton} 
          style={{ position: 'absolute', top: noButtonPosition.top, left: noButtonPosition.left }}
        >
          NO
        </button>
      </div>

      {showModal && (
        <div className='modal'>
          <h3>GOOOOOOOOOD JOB</h3>
          <p>YOURE SOOOO SMART!!!! (and cute)</p>
          <img src={kittyGif} alt="Celebration GIF" />
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
    </>
  );
}

export default App;
