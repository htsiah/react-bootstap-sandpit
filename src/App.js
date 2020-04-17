import React, { useState, useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { AuthContext } from './components/shared/context/auth-context';
import RoutesNoAuth from './RoutesNoAuth';
import RoutesAuth from './RoutesAuth';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    window.location.href = '/';
  }, []);

  // Define route based on isLoggedIn flag.
  let routes = isLoggedIn ? RoutesAuth : RoutesNoAuth;

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
      {console.log('Call App() - return ' + isLoggedIn)}
      <BrowserRouter>
        <Layout>{routes}</Layout>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
