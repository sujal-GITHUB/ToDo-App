import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-white font-bold text-3xl'>Hola Amigo!!</h1>
      <br />
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
