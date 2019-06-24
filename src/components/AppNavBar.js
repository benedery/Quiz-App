import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionCreators";
import Button from "react-bootstrap/Button";

const AppNavBar = ({history, newPlayerHandler, selectQuizBtnHandler}) => {
    return (
        <Navbar sticky="top" bg="dark" variant="dark">
            <Navbar.Brand>Quiz App</Navbar.Brand>
            <Nav className="mr-5">
                <Button className="mr-3" onClick={() => newPlayerHandler(history)}>New Player</Button>
                <Button onClick={() => selectQuizBtnHandler(history)}>Select Quiz</Button>
            </Nav>

            {/*<h1>You Are ? </h1>*/}
        </Navbar>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectQuizBtnHandler: (history) => dispatch(actionCreators.summarySelectQuiz(history)),
        newPlayerHandler: (history) => dispatch(actionCreators.summaryNewPlayer(history))
    }
};

export default withRouter(connect(null, mapDispatchToProps)(AppNavBar));