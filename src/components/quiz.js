import React, { Component } from 'react'
// import questions from '../Britannica-Quiz-Exercise/questions.json'
import Question from './question'

export default class Quiz extends Component {

  render() {
    return (
      <div>
        <Question
          quiz = {this.props.quiz}
          returnToLanding = {this.props.returnToLanding}
        />
      </div>
    )
  }
}
