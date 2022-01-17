import { Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense, useEffect } from 'react';
import HomeView from './views/HomeView/HomeView';
// import ReportsView from './views/ReportsView';
import ExpensesView from './views/ExpensesView';
import IncomeView from './views/IncomeView';
import { BgGrey } from './App.styled';
import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentToken, getCurrentUser, getFetchigCurrentUser, refresh } from './redux/auth';
import Home from './routs/Home';

// import { useDispatch } from 'react-redux';
// import { authOperations, authSelectors } from './redux/auth';
// import { useStore } from 'react-redux';
// import Balance from './components/Balance';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);


  // const isFetchigCurrentUser = useSelector(state =>
  //   getFetchigCurrentUser(state),
  // );

  // const onToken = useSelector(getCurrentToken);
  
  // useEffect(() => {
  //   if (onToken) {
  //     dispatch(getCurrentUser());
  //   }
    
  // }, [dispatch, onToken]);
  return (
    <div>
      <BgGrey />
      <Header />
      {/* <Balance/> */}
      <Suspense fallback={<Spinner />}>
        {/* {isFetchigCurrentUser ? (
          <Spinner />
        ) : ( */}
          <Routes>
            <Route exact path="/" element={<Home /> } />
            <Route exact path="/expenses" element={<ExpensesView />} />
            <Route exact path="/income" element={<IncomeView />} />
            {/* <Route exact path="/reports" element={<ReportsView />} /> */}
            {/* <Route path="*" element = {<Error/>} / > */}
        </Routes>
          {/* )} */}
      </Suspense>  
    </div>
  );
}

export default App;
