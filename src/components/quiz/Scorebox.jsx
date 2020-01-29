import React, { Component } from 'react'

class Scorebox extends Component {
    render() {
        return (
            <div className = "scorebox">
                <center className="mainHeading">
                    <h3>Quiz Mania</h3>
                    Question <strong>{this.props.current + 1}</strong> of <strong>{this.props.questions.length}</strong><br />
                    <strong>Score </strong><span className="score">{this.props.score}</span>
                </center>
            </div>
        )
    }
}

export default Scorebox
