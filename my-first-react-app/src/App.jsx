import { useState } from 'react'
import './App.css'
import Clock from './sideeffect'
import RenderName from './AppII'

function App() {
  const [count, setCount] = useState(0)

  const size = { fontSize: "20px" };

  return (
    <>
      <h1>Vite + React</h1>

      <button onClick={() => setCount(count + 1)}>
        count is {count}
      </button>

      <Clock />

      <p style={size}>king</p>

      <RenderName name={true} />
    </>
  )
}

export default App;