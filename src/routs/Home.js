import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getIsAuthenticated} from "../redux/auth/auth-selectors";
import { useNavigate } from "react-router-dom";

import HomeView from "../views/HomeView/HomeView";


function Home
() {
  const login = useSelector(getIsAuthenticated);
  const history = useNavigate();

  useEffect(() => {
    if (login) {
      history("/income");
    }
  }, [history, login]);

  return (
    <section>
      <HomeView/>
    </section>
  );
}

export default Home
;
