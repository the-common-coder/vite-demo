import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="h-full bg-slate-800 text-white flex flex-col items-center justify-center">
      <div class="flex">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 class="text-5xl font-bold my-5">Vite + React</h1>
      <div class="flex flex-col">
        <button class="bg-gray-500 py-2 px-2 rounded text-white cursor-pointer" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p class="my-5">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
