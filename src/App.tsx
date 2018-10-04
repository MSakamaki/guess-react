

import { createBrowserHistory } from 'history';
import * as React from 'react';
import { Link, Redirect, Route, Router, Switch, } from 'react-router-dom';

import './App.css';

import About from './template/about';
import Archives from './template/archives';
import Home from './template/home';

const history = createBrowserHistory({
  basename: 'guess-react'
})

class App extends React.Component {
  public render() {
    return (
      <Router history={history}>
        <div className="App">
          <header className="header">
            <Link to="/home">home</Link>
            <Link to="/archives">archives</Link>
            <Link to="/about">about</Link>
          </header>
          <Switch>
            <Redirect exact={true} from="/" to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/archives" component={Archives} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
