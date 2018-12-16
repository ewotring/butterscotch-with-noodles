import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import quiz from '../src/Britannica-Quiz-Exercise/quiz.json'
import Quiz from './components/quiz'

class App extends Component {
  constructor() {
    super();
    this.state = {
      // error: null,
      // imageIsLoaded: false,
      // imageUrl: '',
      showQuiz: false
    }
  }

  // componentDidMount() {
  //   // console.log(quiz);
  //   // console.log(quiz.title);
  //   // I believe that my request is restricted by the same-origin policy.
  //   // For this fetch to work, I think I need my origin to be allowed in the header
  //   // of the response from the server. Lacking this ability, I've directly linked to the
  //   // image URL in my img tag.
  //   fetch(quiz.image.filePath, {mode: 'no-cors'})
  //   // fetch(quiz.image.filePath)
  //     .then(result => result.url)
  //     .then(
  //       (result) => {
  //         console.log(result)
  //         this.setState({
  //           imageIsLoaded: true,
  //           imageUrl: result
  //         })
  //       },
  //       (error) => {
  //         this.setState({
  //           imageIsLoaded: true,
  //           error
  //         })
  //       }
  //     )
  // }

  showQuiz = event => {
    event.preventDefault()
    this.setState({
      showQuiz: true
    })
  }

  render() {
    document.title = quiz.browserTitle
    // const { error, imageIsLoaded, imageUrl } = this.state
    // console.log(error)
    // console.log(imageIsLoaded)
    // console.log(imageUrl)
    // if (error) {
    //   return (
    //     <div className="App">
    //       <header className="App-header">
    //         <div>{quiz.title}</div>
    //         {/* <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a> */}
    //       </header>
    //       <div>{quiz.description}</div>
    //       <div>Error: {error}</div>
    //       <Quiz quiz={quiz} />
    //     </div>
    //   )
    // } else if (!imageIsLoaded) {
    //   return (
    //     <div className="App">
    //       <header className="App-header">
    //         <div>{quiz.title}</div>
    //         {/* <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a> */}
    //       </header>
    //       <div>{quiz.description}</div>
    //       <div>Loading Image</div>
    //       <Quiz quiz={quiz} />
    //     </div>
    //   )
    // } else {
      if (!this.state.showQuiz) {
        return (
          <div className="App">
            <header className="App-header">
              <div className='quiz-title'>{quiz.title}</div>
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
            <div className='body quiz-description'>{quiz.description}</div>
            <div className='body quiz-instruction'>{quiz.instruction}</div>
            {/* <img src={imageUrl} alt={quiz.image.altText} /> */}
            <img
              src={quiz.image.filePath}
              alt={quiz.image.altText}
              onClick = { event => {
                this.showQuiz(event)
              }}
              className='landing-graphic'
            />
          </div>
        );
      } else {
        return (
          <div className="App">
            <header className="App-header">
              <div className='quiz-title'>{quiz.title}</div>
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

        )
      }
    // }
  }
}

export default App;

/*
Make a landing page with the resources in the JSON
Load graphics asynchronously
Display quiz question titles as a list
click a question to view that question detail and answer the question
*/