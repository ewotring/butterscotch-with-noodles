import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import quiz from '../src/Britannica-Quiz-Exercise/quiz.json'
import Quiz from './components/quiz'

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     error: null,
  //     isLoaded: false,
  //     items: []
  //   }
  // }

  componentDidMount() {
    // console.log(quiz);
    // console.log(quiz.title);
    document.title = quiz.title
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
        <Quiz quiz = { quiz } />
      </div>
    );
  }
}

export default App;

/*
Make a landing page with the resources in the JSON
Load graphics asynchronously
Display quiz question titles as a list
click a question to view that question detail and answer the question
*/