import React from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import QuizComponent from './components/QuizComponent';
import ResultComponent from './components/ResultComponent';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomeComponent/>
          </Route>
          <Route path="/QuizComponent">
            <QuizComponent/>
          </Route>
          <Route path='/ResultComponent'> 
            <ResultComponent/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
