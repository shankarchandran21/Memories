import './App.css'
import {Container} from '@material-ui/core'

import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Auth from './Components/Auth/Auth'


function App() {
   



  return (
       <Container maxWidth="lg">
           <Navbar/>
           <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/auth' element={<Auth/>} />
           </Routes>
    </Container>

  )
}

export default App
