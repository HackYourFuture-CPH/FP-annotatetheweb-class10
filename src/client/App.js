import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage';
import RegisterPage from './components/Pages/Register/RegisterPage';
import LoginPage from './Pages/LoginPage';
import ProjectsPage from './components/Pages/Projects/ProjectsPage';
import ScreenshotsPage from './components/Pages/Screenshots/ScreenshotsPage';
import UserPage from './components/Pages/User/UserPage';
import { Provider } from './context/AuthContext';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.changeScreenshotKey = (screenshot_keyInput) =>{
      this.setState(state =>{
        screenshot_key: 
          state.screenshot_key === '' ? '' : screenshot_keyInput
      })
    }

    this.state = {
      screenshot_key: '',
      changeScreenshotKey: this.changeScreenshotKey
    };
  }

  render() {
    return (
      <Provider value={this.state}>
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
}

export default App;
