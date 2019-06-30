import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionCreators";
import Button from "react-bootstrap/Button";
import {faCheckCircle, faFireAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons/faThumbsUp";

const AppNavBar = ({history, newPlayerHandler, selectQuizBtnHandler,correctAnswers,name}) => {
    // message Showing based on Correct answers
    const Message = ()=> {
    switch (correctAnswers) {
        case 1:
            return <h3>Great Start, {name} <FontAwesomeIcon
                icon={faCheckCircle}/></h3>;
        case 2:
            return <h3>Keep IT Going, {name}! <FontAwesomeIcon
                icon={faThumbsUp}/></h3>;
        case 3:
            return <h3>{name} , You Are ON FIRE! <FontAwesomeIcon
                icon={faFireAlt}/></h3>
        default:
            return null
    }
    };

    return (
        <Navbar sticky="top" bg="dark" variant="dark">
            <Navbar.Brand><h3 className="navBar-brand font-weight-bolder">Quiz App</h3></Navbar.Brand>
            <Nav className="mr-5">
                <Button className="mr-3 font-weight-bold" onClick={() => newPlayerHandler(history)}>New Player</Button>
                <Button className="mr-5 font-weight-bold" onClick={() => selectQuizBtnHandler(history)}>Select Quiz</Button>
                <div className="pl-4 message-txt">
                    <Message/>
                </div>
            </Nav>
        </Navbar>
    )
};

const mapStateToProps = (state) => {
    return {
        correctAnswers:state.scores.correctAnswers,
        name:state.pageView.name
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectQuizBtnHandler: (history) => dispatch(actionCreators.navBarSelectQuiz(history)),
        newPlayerHandler: (history) => dispatch(actionCreators.navBarNewPlayer(history))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppNavBar));