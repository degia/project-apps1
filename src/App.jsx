import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <h4 className='text-4xl text-teal-300'>Vara Decoration</h4>
        </a>
      </div>
      <p className="read-the-docs">
        Design by Vara Decoration
      </p>
    </>
  )
}

export default App
