import { useState } from 'react'

function App() {
   const [count, setCount] = useState(0)

   return (
      <div>
         <h1>{count}</h1>
         <br />
         <button onClick={() => setCount((c) => c + 1)}>+</button>
         <button onClick={() => setCount((c) => c - 1)}>-</button>
      </div>
   )
}

export default App
