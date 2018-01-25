
import React, { Component } from 'react';
import { Header } from "./ui/Header";
import {Footer} from "./ui/Footer";
import { Switch, Route } from "react-router-dom";
import List from './List';
import "./App.css";


class App extends Component {
  render() {
    return <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={List} />
        </Switch>
        <Footer/>
      </div>;
  }
}

export default App;
