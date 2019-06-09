import React from 'react';
import {connect} from "react-redux";
import {useState} from 'react'
import {setUserName} from "../actions/actionCreators";
import '../App.css'

const WelcomePage = ({setNameStart}) => {
    const [name, setName] = useState("");

    return(
        <div className="welcome-page-main text-shadow text-center">
            <h1>Welcome To QuizApp</h1>
            <h5>Please Enter Your Name</h5>
            <input className="text-center p-lg-3 mb-5" placeholder="Enter you name" value={name} onChange={event => setName(event.target.value)}/>
            <br/>
            <button onClick={ ()=> setNameStart(name)}>Start Quiz</button>
        </div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        setNameStart: (name) => dispatch(setUserName(name))
    }
};

export default connect(null,mapDispatchToProps)(WelcomePage);