import React, { useEffect, useRef, useState } from 'react'


const Timer = () => {
 const [timer,setTimer] = useState(100)
 const timerid = useRef(null)
 useEffect(()=>{

   let id = setInterval(() => {
     
           
           setTimer((timer)=>timer-1)
       
   }, 1000);
       timerid.current= id
     return ()=>{
         clearInterval(timerid.current)
         setTimer(100)
     }

 },[])

const handleCountdown = ()=>{
  return clearInterval(timerid.current)
}
  if(timer<=0){
    setTimer(100);
    clearInterval(timerid.current)
  }
  return (
    <div >
      <h1> Count Down : </h1> 

      <h2>{timer}</h2> 

    <button className='Button' onClick={handleCountdown}>Stop</button>
    </div>
    
  )
}

export default Timer