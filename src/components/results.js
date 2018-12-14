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
              {Parser(result.question)}
            </div>
            <div>
              {result.result}
            </div>
            <div>
              {Parser(result.explanation)}
            </div>
          </div>
        ))}
      </div>
    )
  }
}