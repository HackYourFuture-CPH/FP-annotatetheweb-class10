import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/HomePage';
import RegisterPage from './pages/Register/RegisterPage';
import LoginPage from './pages/Login/LoginPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import ScreenshotsPage from './pages/Screenshots/ScreenshotsPage';
import UserPage from './pages/User/UserPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
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
          <Route exact path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
