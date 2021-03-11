import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Container from './components/Container';
import HomeView from './views/HomeView';
import AddView from './views/AddView';

function App() {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden bg-gray-100">
        <Sidebar></Sidebar>
        <Container>
          <Switch>
            <Route exact path="/(photos|videos)?">
              <HomeView />
            </Route>
            <Route exact path="/add">
              <AddView />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
