import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import AppHeader from './components/header/AppHeader';
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Register from "./views/Register/Register";
import TaskList from "./views/taskList/TaskList";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppHeader />
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/task_list" exact component={TaskList} />
        </div>
      </Router>

    );
  }
}

export default App;
