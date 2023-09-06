import { useState } from 'react'
import './App.css'
import Color from './Components/Color'
import Content from './Components/Content'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'


function App() {

  return (
    <div className='app' >
     <div className="all_Contenter">
      <Color/>
      <Content/>
      <Navbar/>
     </div>
    </div>
  )
}

export default App
