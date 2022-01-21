import { Routes, Route, Navigate } from 'react-router-dom';
import React, { lazy, Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeView from './views/MainView/MainView';
import OperationsView from './views/OperationsView';


import Spinner from './components/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentToken, getCurrentUser, getFetchigCurrentUser, getIsAuthenticated, refresh } from './redux/auth';
import Home from './routs/Home';
import HeaderView from './views/HeaderView/HeaderView';
import MainView from './views/MainView/MainView'
import { HomeContainer } from './views/MainView/MainView.styled';
import ReportsView from './views/ReportsView';

// import { useDispatch } from 'react-redux';
// import { authOperations, authSelectors } from './redux/auth';
// import { useStore } from 'react-redux';
// import Balance from './components/Balance';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const isLogIn = useSelector(
    getIsAuthenticated
  );

  return (
    <div>
      <HeaderView />
      <HomeContainer>
      {/* <Balance/> */}
      <Suspense fallback={<Spinner />}>
    
        <Routes>

          <Route path="/" element={<Navigate replace to="home" />} />
        <Route
          path="home"
          element={isLogIn ? <Navigate to="/expenses" /> : <MainView />}
        />
        <Route
          path="expenses"
            element={!isLogIn ? <Navigate to="/home" /> : <OperationsView />}
            
        ></Route>
            <Route path="/income"  element={!isLogIn ? <Navigate to="/home" /> : <OperationsView />} /> 
            <Route exact path="/reports" element={!isLogIn ? <Navigate to="/home" /> :<ReportsView />} />

            {/* <Route path="*" element = {<Error/>} / > */}

        </Routes>
       
        </Suspense>  
      </HomeContainer>
         <ToastContainer autoClose={2500} />
        </div>
  );
}

export default App;

{/* <Route exact path="/" element={<Home /> } />
            <Route exact path="/expenses" element={<ExpensesView />} />
            <Route exact path="/income" element={<IncomeView />} /> */}
            {/* <Route exact path="/reports" element={<ReportsView />} /> */}
            {/* <Route path="*" element = {<Error/>} / > */}
