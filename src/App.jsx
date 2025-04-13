import React, { Suspense } from 'react';
import './App.css'
import DaisyNav from './components/daisyNav/DaisyNav';
import NavBar from './components/Navbar/NavBar';
import PricingOptions from './components/pricingOptions/PricingOptions';

const pricingPromise = fetch("pricingOptions.json").then(res => res.json()); 
const App = () => {
  return (
    <div>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <PricingOptions pricingPromise={pricingPromise} ></PricingOptions>
        </Suspense>
      </main>
    </div>
  );
};

export default App;