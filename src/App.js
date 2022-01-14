import { Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';


import HomeView from './views/HomeView';
// import BalanceView from './views/BalanceView';
// import ReportsView from './views/ReportsView';
import Credit from './components/Credit';
import Debit from './components/Debit';
import BalanceBar from './components/BalanceBar';
import { BgGrey } from './App.styled';





function App() {
  return (
    <div>
     <BgGrey/>
      <BalanceBar /> 
      <Routes>
      
        <Route exact path="/" element={<HomeView />} />
        
        {/* <Route exact path="/balance" element={<BalanceView />} /> */}
        <Route exact path="/credit" element={<Credit />} />
        <Route exact path="/debit" element={<Debit />} />
        {/* <Route exact path="/reports" element={<ReportsView />} /> */}
        {/* <Route path="*" element = {<Error/>} / > */}
      </Routes>                     
    </div>
  );
}

export default App;
