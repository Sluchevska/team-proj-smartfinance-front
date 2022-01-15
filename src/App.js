import { Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

import Navigation from './components/Navigation/Navigation';
import HomeView from './views/HomeView';
import BalanceView from './views/BalanceView';
import CreditPage from './components/Credit/BalancePage';
// import ReportsView from './views/ReportsView';

function App() {
  return (
    <div>
      <Navigation />
        <Routes>
          <Route exact path="/" element={<HomeView />} />
          <Route exact path="/credit" element={<BalanceView />} /> 
          <Route exact path="/debit" element={<BalanceView />} /> 
          {/* <Route exact path="/reports" element={<ReportsView />} /> 
          <Route path="*" element = {<Error/>} />   */}
        </Routes>                     
    </div>
  );
}

export default App;
