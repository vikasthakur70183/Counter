import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='modal-wrapper'></div>
      <div className="main_div">
        <h1>{count}</h1>
        <div className='Div_btn' >
          {count < 20 && <button className="btn" onClick={() => setCount((count) => count + 1)}>+</button>}
          {count > 0 && <button className="btn" onClick={() => setCount((count) => count - 1)}>-</button>}
          {count > 0 && <button className='btn' onClick={() => setCount((count) => 0)}>Reset</button>}
        </div>
      </div>
    </>
  )
}

export default App
