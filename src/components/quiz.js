import React, { Component } from 'react'
// import questions from '../Britannica-Quiz-Exercise/questions.json'
import Question from './question'

export default class Quiz extends Component {
  constructor() {
    super()
    this.state = {
      // questionNumber: 0
    }
  }

  // incrementQuestionNumber = () => {
  //   let newQuestionNumber = this.state.questionNumber + 1
  //   this.setState({
  //     questionNumber: newQuestionNumber
  //   })
  //   console.log(this.state.questionNumber)
  // }

  // selectAnswer = (event, index) => {
  //   event.preventDefault()
  //   console.log(event)
  //   console.log(index)
  //   // this.incrementQuestionNumber();
  // }

  render() {
    // console.log(questions)
    // console.log(this.props.quiz)
    return (
      <div>
        <Question
          // questions = { questions }
          // question = { questions[this.state.questionNumber] }
          // questionNumber = { this.state.questionNumber }
          // selectAnswer = { this.selectAnswer }
          quiz = {this.props.quiz}
        />
      </div>
    )
  }
}

/*
cycle through the questions
show one question at a time
use timer? setTimeout?
on question submit, increment question number

*/