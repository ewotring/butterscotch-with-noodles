import React, { Component } from 'react'
import Parser from 'html-react-parser'
// Is html-react-parser safer than dangerouslySetInnerHTML?
// I will assume that the JSON is from my server and is safe, for this project.
import Results from './results'
import questions from '../Britannica-Quiz-Exercise/questions.json'


export default class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: questions[0],
      // questionNumber: this.props.questionNumber
      questionNumber: 0,
      questions: questions
    }
  }

  // componentDidMount() {
  //   this.setQuestion()
  // }

  updateQuestion = () => {
    // let newQuestionNumber = this.state.questionNumber + 1
    this.setState((state) => {
      // questionNumber: newQuestionNumber
      return {
        questionNumber: state.questionNumber + 1,
        question: state.questions[state.questionNumber + 1]
      }
    })
    console.log(`question questionNumber is ${this.state.questionNumber}`)
    // this.setQuestion()
  }

  // setQuestion = () => {
  //   // let newQuestionNumber = this.state.questionNumber + 1
  //   // this.setState({
  //   //   questionNumber: newQuestionNumber
  //   // }).then(
  //     this.setState({
  //       question: this.state.questions[this.state.questionNumber]
  //     })
  //   // )
  // }

  selectAnswer = (event, index) => {
    event.preventDefault()
    // this.incrementQuestionNumber().then(this.setQuestion())
    this.updateQuestion()
    // this.setQuestion()
    // this.props.selectAnswer(event, index)
  }

  render() {
    console.log(this.state.question)
    if (this.state.questionNumber < this.state.questions.length) {
      return (
        <div>
          <div>QUESTION COMPONENT</div>
          <div>{Parser(this.state.question.question)}</div>
          <div>
            Choices:
            <ul>
              {this.state.question.answers.map((answer, index) => (
                <li
                  key = {answer}
                  onClick = { event => {
                    this.selectAnswer(event, index)
                  }}
                >
                  {answer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    } else {
      return (
        <Results />
      )
    }
  }
}