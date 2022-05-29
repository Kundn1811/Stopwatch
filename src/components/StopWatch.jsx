import React, { useRef, useState, useEffect } from 'react'

function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

const StopWatch = () => {
    // const [timerid,setTimerId] = useState(null)
    const timerid = useRef(null)
    const [watch, setWatch] = useState(0)

    const start = ()=>{
           if(!timerid.current){
               
               let id = setInterval(()=>{
                       setWatch((prev)=>prev+100)
               },100)
               timerid.current= id
           }

    }
    const pause = ()=>{
          
    }

    const reset =()=>{
        clearInterval(timerid.current)
        setWatch(0)
        timerid.current= null
    }
    const stop = ()=>{
         clearInterval(timerid.current);
         timerid.current= null
    }

    useEffect(() => {
      return reset
    }, [])
    

  return (
    <div>StopWatch
        <h1>{msToTime(watch)}</h1>
        <button onClick={start}>Start</button> | <button onClick={pause}>Pause</button> | <button onClick={stop}>Stop</button> | <button onClick={reset}>Reset</button>
    </div>
  )
}

export default StopWatch