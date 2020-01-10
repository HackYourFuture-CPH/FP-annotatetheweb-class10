import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Pages/Home/HomePage';
import RegisterPage from './components/Pages/Register/RegisterPage';
import LoginPage from './components/Pages/Login/LoginPage';
import ProjectPage from './components/Pages/Projects/ProjectPage.component';
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
            <ProjectPage />
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
