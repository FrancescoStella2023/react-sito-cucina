import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <h1 className='text-primary'>Il mio ricettario</h1>
        <p>Benvenuto nel sito delle ricette!</p>
      </div>
    </>
  )
}

export default App
