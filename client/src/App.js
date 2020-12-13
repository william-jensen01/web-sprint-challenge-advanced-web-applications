import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';
import "./styles.scss";

function App() {
  const logout = () => {
    localStorage.removeItem('token')
  };

  return (
    <Router>
      <div className="App">
        <Link to='/login'>Login</Link>
        <Link to='/bubbles'>Bubbles!</Link>
        <Link onClick={logout}>Logout</Link>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path='/bubbles' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
