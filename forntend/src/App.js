import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './comps/home'



class App extends Component {
  state={
    apires:''
  }
  componentDidMount() {
    fetch('http://localhost:5440/dashboard')
    .then(res => res.json())
    .then(data => this.setState({apires:data
    }))

  }

  render() {
    const {apires} = this.state
    return (
      <>
      hello
      {
        console.log(apires)
      }

      </>
    );
  }

}

export default App;
