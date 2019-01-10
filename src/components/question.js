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
    this.scorecounter = 0
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
      this.scorecounter += 1
    } else {
      question.result = 'Incorrect'
    }
    question.userAnswer = question.answers[index]
    question.correctAnswer = question.answers[question.correct - 1]
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
      if (this.state.questionNumber === 0) {
        return (
          <div>
            <div className='body question'>{Parser(this.state.question.question)}</div>
            <div>
              <div className='body'>{this.state.question.instructions}</div>
              <div>
                {this.state.question.answers.map((answer, index) => (
                  <button
                    className=' body answer'
                    key={answer}
                    onClick={event => {
                      this.selectAnswer(event, index, this.state.question)
                    }}
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </div>
            <div className='body intermediate-results'>
              The current score is {this.scorecounter} out of {this.state.questionNumber}
            </div>
            <div className='body quiz-instruction'>{this.state.question.restartInstructions}</div>
            <img
              src={this.props.quiz.thumbnail.filePath}
              alt={this.props.quiz.thumbnail.altText}
              onClick={event => { this.returnToLanding(event) }}
            />
          </div>
        )
      }
      return (
        <div>
          <div className='body question'>{Parser(this.state.question.question)}</div>
          <div>
            <div className='body'>{this.state.question.instructions}</div>
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
          <div className='body intermediate-results'>
            The current score is {this.scorecounter} out of {this.state.questionNumber}
          </div>
          <div className='body previous-question-results'>
            The answer to the previous question was {this.state.questions[this.state.questionNumber - 1].result}
          </div>
          <div className='body quiz-instruction'>{this.state.question.restartInstructions}</div>
          <img
            src={this.props.quiz.thumbnail.filePath}
            alt={this.props.quiz.thumbnail.altText}
            onClick={event => {this.returnToLanding(event)}}
          />
        </div>
      )
    } else {
      return (
        <Results
          results = { this.state.resultQuestions }
          returnToLanding = {this.returnToLanding}
        />
      )
    }
  }
}