import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'
import StopWatch from './components/StopWatch'
function App() {
 const [toggle,setToggle] = useState(false)

  return (
    <div className="App">
    <button onClick={()=>setToggle(!toggle)}>Toggle</button>
     
     {toggle ? <Timer/>: <StopWatch/>}
     {/* <StopWatch/> */}

    </div>
  )
}

export default App
