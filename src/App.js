import { Routes, Route, Navigate } from 'react-router-dom';
import React, { lazy, Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Spinner from './components/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentToken,
  getCurrentUser,
  getFetchingCurrentUser,
  getIsAuthenticated,
 
} from './redux/auth';

import HeaderView from './views/HeaderView/HeaderView';

import { HomeContainer } from './views/MainView/MainView.styled';

const MainView = lazy(() =>
  import('./views/MainView/MainView' /*webpackChunkName: "main-view" */),
);
const OperationsView = lazy(() =>
  import('./views/OperationsView' /*webpackChunkName: "operations-view" */),
);
const ReportsView = lazy(() =>
  import('./views/ReportsView' /*webpackChunkName: "reports-view" */),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const isLogIn = useSelector(getIsAuthenticated);



  return (
    <div>
      <HeaderView />
      <HomeContainer>
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
            <Route
              path="/income"
              element={!isLogIn ? <Navigate to="/home" /> : <OperationsView />}
            />
            <Route
              exact
              path="/reports"
              element={!isLogIn ? <Navigate to="/home" /> : <ReportsView />}
            />

            {/* <Route path="*" element = {<Error/>} / > */}
          </Routes>
      
        </Suspense>
      </HomeContainer>
      <ToastContainer autoClose={2500} />
    </div>
  );
}

export default App;

