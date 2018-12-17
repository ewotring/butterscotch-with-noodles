import React, { Component } from 'react'
import Parser from 'html-react-parser'
import '../styles/results.scss'

export default class Results extends Component {
  render() {
    return (
      <div className='results-body results-container'>
      <div className='restart-button-container'>
        <button
          className='restart-button'
          onClick={this.props.returnToLanding}
        >
          Select here to return to the start page and reset the quiz
        </button>
      </div>
        {this.props.results.map(result => (
          <div
            key = {result.question}
            className = {
              result.result === 'Correct!' ? 'result-item correct' : 'result-item incorrect'
            }
          >
            <div className='item-body'>
              Question: {Parser(result.question)}
            </div>
            <div className='item-body'>
              Your answer: {result.userAnswer}
            </div>
            <div className='item-body'>
              Correct answer: {result.correctAnswer}
            </div>
            <div className='item-body'>
              Result: {result.result}
            </div>
            <div className='item-body'>
              Explanation: {Parser(result.explanation)}
            </div>
          </div>
        ))}
      </div>
    )
  }
}
