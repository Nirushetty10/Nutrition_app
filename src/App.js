import React from 'react';
import "./App.css"
import Home from './Pages/Home';
import Stats from './Pages/Stats';
// import Cards from './Pages/Cards';
import FooterPage from './Pages/FooterPage';
import Subscribe from './Components/subscribe/Subscribe';

function App() {
  return (
    <div>
      <Home />
      <Stats />
      {/* <Cards /> */}
      <Subscribe />
      <FooterPage />
    </div>
  )
}

export default App