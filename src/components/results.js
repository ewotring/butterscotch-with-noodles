import React, { Component } from 'react'
import Parser from 'html-react-parser'

export default class Results extends Component {
  render() {
    console.log(this.props.results)
    return (
      <div>
        {this.props.results.map(result => (
          <div key = {result.question}>
            <div>
              Question: {Parser(result.question)}
            </div>
            <div>
              Your answer: {result.userAnswer}
            </div>
            <div>
              Correct answer: {result.correctAnswer}
            </div>
            <div>
              Result: {result.result}
            </div>
            <div>
              Explanation: {Parser(result.explanation)}
            </div>
          </div>
        ))}
      </div>
    )
  }
}