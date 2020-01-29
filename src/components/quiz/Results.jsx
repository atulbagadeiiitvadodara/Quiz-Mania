import React, { Component } from 'react'
import AnswerKey from './AnswerKey'
import { Button } from 'react-bootstrap'

class Results extends Component {
    createScoreMessage(percent) {
        let message = ''
        if (percent === 100) {
            message = 'Bravo!!'
        } else if (percent > 80) {
            message = 'Awesome Job!'
        } else if (percent < 80 && percent > 60) {
            message = 'Your Performance is quite Good!'
        } else {
            message = "You should practice more!"
        }
        return message
    }

    render() {
        var percent = (this.props.score / this.props.questions.length * 100)
        return (
            <div>
                
                    <center>
                        <h4>You Got {this.props.score} out of {this.props.questions.length} Correct</h4>
                        <h1>{percent}%</h1>
                        
                        <h2>{this.createScoreMessage(percent)}</h2>
                    </center>
                    
                    <center>
                        <Button bsStyle="success" href="/">Take Again</Button>
                    </center>
                
                    <center>
                    <div className = "headAnswerKey">
                    <hr />
                        <h3>Correct Answers</h3>
                    <hr />
                    </div>
                    </center>
                    
                    <AnswerKey questions={this.props.questions} />
                
            </div >
        )
    }
}

export default Results