import React from 'react';
import {connect} from "react-redux";
import {useState} from 'react'
import {setUserName} from "../actions/actionCreators";
import {Link, withRouter} from "react-router-dom";
import '../App.css'
import Button from "react-bootstrap/Button";

const WelcomePage = ({setNameStart, history}) => {
    const [name, setName] = useState("");
    //Handle 'Enter' key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setNameStart(name)
            history.push("/quizselect");
        }
    };

    return (
        <div className="welcome-page-main text-shadow text-center">
            <h1>Welcome To QuizApp</h1>
            <h5>Please Enter Your Name</h5>
            <input className="text-center p-lg-3 mb-5"
                   placeholder="Enter you name"
                   value={name}
                   onChange={event => setName(event.target.value)}
                   onKeyPress={(e) => handleKeyPress(e)}
            />
            <br/>
            <Link to="/quizselect">
                <Button variant="primary" onClick={() => setNameStart(name)}>Start Quiz</Button>
            </Link>
        </div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        setNameStart: (name) => dispatch(setUserName(name))
    }
};

export default withRouter(connect(null, mapDispatchToProps)(WelcomePage));