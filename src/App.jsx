import { useState, useRef, useEffect } from 'react';
import './App.css';
import Logo from "../src/assets/logo.png"
function App() {
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setSecs((prevSecs) => {
        if (prevSecs < 59) {
          return prevSecs + 1;
        } else {
          setMins((prevMins) => prevMins + 1);
          return 0;
        }
      });
    }, 1000);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reset = () => {
    setSecs(0)
    setMins(0)
  }
  return (
    <>
      <h2>STOP WATCH</h2>
      <div className='main-div'>
        <div>
          <span><img src={Logo} /></span>
          <span className='timer-image'><h3>TIMER</h3></span>
        </div>
        <div className='timer'>
          {(mins < 10) ? <span>0{mins}</span> : <span>{mins}</span>}
          <span> : </span>
          {(secs < 10) ? <span>0{secs}</span> : <span>{secs}</span>}
        </div>
        <div>
          <button className='start-button' onClick={start}>Start</button>
          <button className='stop-button' onClick={stop}>Stop</button>
          <button className='reset-button' onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
