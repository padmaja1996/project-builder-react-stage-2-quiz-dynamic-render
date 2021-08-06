import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class HomeComponent extends Component {
    render() {
        return (
            <div className="home-container">
                <h1>Quiz App</h1>
                <button><Link to="/QuizComponent" className="link">Play</Link></button>
            </div>
        );
    }
}

export default HomeComponent;