import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionCreators";

const AppNavBar = ({history, newPlayerHandler,selectQuizBtnHandler}) => {
    return (
            <Navbar sticky="top"  bg="dark" variant="dark">
                <Navbar.Brand onClick={() => newPlayerHandler(history)}>Quiz App</Navbar.Brand>
                <Nav className="mr-5">
                    <NavLink className="mr-3" onClick={() => newPlayerHandler(history)}>New Player</NavLink>
                    <NavLink onClick={() => selectQuizBtnHandler(history)}>Select Quiz</NavLink>
                </Nav>
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