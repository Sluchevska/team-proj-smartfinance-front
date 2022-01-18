import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getIsAuthenticated} from "../redux/auth/auth-selectors";
import { useNavigate } from "react-router-dom";

import MainView from "../views/MainView/MainView";


function Home
() {
  const login = useSelector(getIsAuthenticated);
  const history = useNavigate();

  useEffect(() => {
    if (login) {
      history("/expenses");
    }
   
  }, [history, login]);

  return (
    <section>
      <MainView/>
    </section>
  );
}

export default Home
;
