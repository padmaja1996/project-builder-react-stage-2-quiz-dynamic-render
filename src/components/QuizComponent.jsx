

import React, { Component } from 'react'
import data from './question.json'
import {Link} from 'react-router-dom'

export default class QuizComponent extends Component {
    constructor(){
        super()
        this.state={
            index:0
        }
    }
    previousQuestion=()=>{
        if(this.state.index>0)
            this.setState({index:this.state.index-1})
    }
    nextQuestion =()=>{
        if(this.state.index<4)
            this.setState({index: this.state.index + 1})
    }
    render() {
        return (
            <div className="main-container">
                <div className="quiz-container">
                    <h1>Question</h1>
                    <div className="question-container">
                        <h4>{data[this.state.index].id} of 15</h4>
                        <h3>{data[this.state.index].question}</h3>
                    </div>
                    <div className="options">
                        <button>{data[this.state.index].optionA}</button>
                        <button>{data[this.state.index].optionB}</button>
                        <button>{data[this.state.index].optionC}</button>
                        <button>{data[this.state.index].optionD}</button>
                    </div>
                    <div className="buttons">
                        <button onClick={this.previousQuestion}>Previous</button>
                        <button onClick={ this.nextQuestion }>Next</button>
                        <button><Link to="/ResultComponent" className="link">Quit</Link></button>  
                    </div>
                </div>
            </div>
        )
    }
}