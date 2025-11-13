import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Sam's Deploy Project</h1>
      <h2>what happens when the count hits 8?</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {count === 8 && (
        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>CLICK ME</a>
      )}

    </>
  )
}

export default App
