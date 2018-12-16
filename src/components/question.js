import React, { Component } from 'react'
import Parser from 'html-react-parser'
// Is html-react-parser safer than dangerouslySetInnerHTML?
// I will assume that the JSON is from my server and is safe, for this project.
import Results from './results'
import questions from '../Britannica-Quiz-Exercise/questions.json'
import '../styles/question.scss'

export default class Question extends Component {
  constructor() {
    super()
    this.state = {
      question: questions[0],
      questionNumber: 0,
      questions: questions,
      resultQuestions: []
    }
  }

  updateQuestion = () => {
    this.setState((state) => {
      return {
        questionNumber: state.questionNumber + 1,
        question: state.questions[state.questionNumber + 1]
      }
    })
  }

  checkAnswer = (index, question) => {
    let answer = index + 1
    if (answer === question.correct) {
      question.result = 'Correct!'
    } else {
      question.result = 'Incorrect'
    }
    question.userAnswer = question.answers[index]
    question.correctAnswer = question.answers[question.correct - 1]
    console.log(question)
    this.setState((state) => {
      return {resultQuestions: [...state.resultQuestions, question]}
    })
  }

  selectAnswer = (event, index, question) => {
    event.preventDefault()
    this.checkAnswer(index, question)
    this.updateQuestion()
  }

  returnToLanding = event => {
    event.preventDefault();
    this.setState((state) => {
      return {
        questionNumber: 0,
        question: state.questions[0]
      }
    })
    this.props.returnToLanding()
  }

  render() {
    if (this.state.questionNumber < this.state.questions.length) {
      return (
        <div>
          <div className='body question'>{Parser(this.state.question.question)}</div>
          <div>
            Choices:
            <div>
              {this.state.question.answers.map((answer, index) => (
                <button
                  className=' body answer'
                  key = {answer}
                  onClick = { event => {
                    this.selectAnswer(event, index, this.state.question)
                  }}
                >
                  {answer}
                </button>
              ))}
            </div>
          </div>
          <div className='body quiz-instruction'>{this.state.question.instructions}</div>
          <img
            src={this.props.quiz.thumbnail.filePath}
            alt={this.props.quiz.thumbnail.altText}
            onClick={event => {this.returnToLanding(event)}}
          />
        </div>
      )
    } else {
      return (
        <Results results = { this.state.resultQuestions } />
      )
    }
  }
}