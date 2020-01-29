import React, { Component } from 'react'

class AnswerKey extends Component {
    render() {
        return (
            <div className="answer-key">
                {
                    this.props.questions.map((question, index) => {
                        return (
                            <div className="answerKey" key={index}>
                                <div> 
                                    <h4>Question {index + 1}</h4>
                                    {question.text}
                                    <h4>Correct Answer</h4>
                                    {question.correct}
                                    <br /><br />
                                </div>
                                
                            </div>

                        )
                    })
                }
            </div>
        )
    }
}

export default AnswerKey