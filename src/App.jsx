import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <h2>Movies lib</h2>
      <Outlet />
    </>
  )
}

export default App
