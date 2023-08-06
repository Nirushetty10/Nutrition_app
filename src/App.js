import React from 'react';
import "./App.css"
import Home from './Pages/Home';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Auth from './Pages/Auth';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/auth" element={<Auth />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App