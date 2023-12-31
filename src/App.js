import React from 'react';
import "./App.css"
import Home from './Pages/Home';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Auth from './Pages/Auth';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/Contact/ContactUs';
import Services from './Pages/ServicePage/Services';
import Test from './Pages/Test/Test';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/auth" element={<Auth />}/>
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/services' element={<Services/>} />
          <Route path='/test' element={<Test/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App