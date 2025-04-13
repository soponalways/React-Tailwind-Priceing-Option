import React from 'react';
import './App.css'
import DaisyNav from './components/daisyNav/DaisyNav';
import NavBar from './components/Navbar/NavBar';
const App = () => {
  return (
    <div>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
    </div>
  );
};

export default App;