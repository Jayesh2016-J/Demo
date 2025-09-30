  // import { use, useRef, useState } from 'react'

  // import './App.css'

  // function App() {
  //  const ref=useRef(0);
  //  const timeref=useRef(0)
  //  const [time,setTime]=useState(0)

  //  const start=()=>{
  //   timeref.current = setInterval(()=>{
  //     ref.current+=1;
  //     setTime(ref.current);
    
  //     if(ref.current>=30){
  //       clearInterval(timeref.current)
  //       alert("Time stops")
  //       ref.current=0;
  //       setTime(ref.current)
  //       timeref.current=0;
  //     }
  //   },1000)
  //  }

  //  const stop=()=>{
  //   clearInterval(timeref.current)
  //  }

  //  const reset=()=>{
  //   clearInterval(timeref.current)
  //   setTime(0)
  //   ref.current=0;
  //  }


  //   return (  
  //     <>
  //     <h1>Timer for {time} seconds</h1>
  //        <input type="text" value={time}  defaultValue={time}/>
  //      <br />
  //      <button onClick={()=>{start()}}>start</button>
  //      <button onClick={()=>{stop()}}>resume</button>
  //      <br />
  //      <button onClick={()=>reset()}>Reset</button>
  //     </>
  //   )
  // }

  // export default App



    import { use, useRef, useState } from "react";
    import "./App.css";
    function App() {
      const [time, setTime] = useState(0);
      const [timerstarted, settimerstarted] = useState(false);
      const [pausemannge,setpausemannge] = useState(0)
    //  const [stopmannge,setstopmannge] = useState(0);
      const ref = useRef(10);
      const timerid = useRef(null);

      const start = () => {
        if (timerid.current) return;
        settimerstarted(true);
        timerid.current = setInterval(() => {
          ref.current -= 1;
          setTime(ref.current);
          if (ref.current <= 0) {
            clearInterval(timerid.current);
            timerid.current = null;
            ref.current = 10;
            settimerstarted(false);
          }
        }, 1000);
      };

      const stop = () => {
        clearInterval(timerid.current); 
        console.log(pausemannge)

      };

      const pause = () => {
        setpausemannge(pausemannge+2)
        if (timerid.current && (pausemannge % 2 == 0) ) {
          clearInterval(timerid.current);
          timerid.current = null;
        }
        else{
        start()
        }
      };

      return (
        <>
          <div className="main-class">
            <h3>Timer for 30 second</h3>
            <button onClick={() => start()}>Start</button>
            {timerstarted && (
              <>
                <button onClick={() => { pause();}}>
                  Pause
                </button>

                <button onClick={() => {stop();}}>
                  Stop
                </button>
              </>
            )}
          </div>
          <h2>Timer Start {time} </h2>
        </>
      );
    }

    export default App;
