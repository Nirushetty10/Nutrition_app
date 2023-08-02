import React from 'react';
import "./App.css"
import Home from './Pages/Home';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/about' element={<Home />}/>
         <Route path='/contact' element={<Home />}/>
         <Route path='/services' element={<Home />}/>
         <Route path='/login' element={<Login />}/>
         <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
      
  )
}

export default App