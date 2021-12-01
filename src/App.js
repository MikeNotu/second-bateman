import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Page from './Page'
import Testo from './components/Testo'
import './App.css';
import NavBar2 from './components/NavBar2';

function App() {
  return (
    <Router>
      {/* <Navigation /> */}
      <NavBar2/>
      <div className="container p-4">
        <Route path="/" exact component={Page} />
        <Route path="/testo" exact component={Testo} />

        {/* <Route path="/create" component={CreateNote} /> */}
        {/* <Route path="/user" component={CreateUser} /> */}
      </div>
    </Router>
  );
}

export default App;
