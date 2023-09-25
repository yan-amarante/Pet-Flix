import { Outlet } from 'react-router-dom'
import NavBar from './Components/NavBar'
import './App.css'

function App() {

  return (
    <section className='container'>
    <NavBar/>
    <Outlet/>
    </section>
  )
}

export default App
