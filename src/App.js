import { Routes, Route, Navigate, useSearchParams } from 'react-router-dom';
import { useHistory, useParams } from 'react-router';
import React, { lazy, Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
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
const InputMobileView = lazy(() =>
  import('./views/InputMobileView' /*webpackChunkName: "inputMobile-view" */),
);


function App() {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const tokenFromApp = searchParams.get('access_token');
  console.log('tokenFromApp', tokenFromApp);
  const verify = searchParams.get('verify');
  console.log('verify', verify);

  if (verify) {

    toast.success(`Ваш e-mail подтвержден, теперь вы можете перейти на сайт`);
    //тут пишешь код на всплытие уведомления о благополучной верификации
    // и что пользователь может войти  на сайт
  }

  useEffect(() => {
    dispatch(getCurrentUser(tokenFromApp));
  }, [dispatch, tokenFromApp]);

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
            <Route
              exact
              path="/expenses/input"
              element={!isLogIn ? <Navigate to="/home" /> : <InputMobileView />}
            />
            <Route
              exact
              path="/income/input"
              element={!isLogIn ? <Navigate to="/home" /> : <InputMobileView />}
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
