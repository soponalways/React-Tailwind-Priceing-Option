import React, { Suspense } from 'react';
import './App.css'
import DaisyNav from './components/daisyNav/DaisyNav';
import NavBar from './components/Navbar/NavBar';
import PricingOptions from './components/pricingOptions/PricingOptions';
import ResultsChart from './components/ResultCharts/ResultsChart';
import axios from 'axios';
import MarksChart from './components/MarksChart/MarksChart';

const pricingPromise = fetch("pricingOptions.json").then(res => res.json()); 
const resutlPromise = fetch("studentsMarks.json").then(res => res.json());
const marksPromise = axios.get("marksData.json"); 
const App = () => {
  return (
    <div>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<div className='text-center'><span className="loading loading-dots loading-xl"></span></div>}>
          <PricingOptions pricingPromise={pricingPromise} ></PricingOptions>
        </Suspense>

        <Suspense fallback={<div className='text-center'><span className="loading loading-dots loading-xl"></span></div>}>
          <ResultsChart resutlPromise={resutlPromise} ></ResultsChart>
        </Suspense>
        <Suspense fallback={<div className='text-center'><span className="loading loading-dots loading-xl"></span></div>}>
            <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
      </main>
    </div>
  );
};

export default App;