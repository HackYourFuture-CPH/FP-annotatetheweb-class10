import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Pages/Home/HomePage';
import RegisterPage from './components/Pages/Register/RegisterPage';
import LoginPage from './components/Pages/Login/LoginPage';
import ProjectsPage from './components/Pages/Projects/ProjectsPage';
import ScreenshotsPage from './components/Pages/Screenshots/ScreenshotsPage';
import UserPage from './components/Pages/User/UserPage';
import { Provider } from './context/AuthContext';

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/projects">
            <ProjectsPage />
          </Route>
          <Route exact path="/screenshots">
            <ScreenshotsPage />
          </Route>
          <Route exact path="/user">
            <UserPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
