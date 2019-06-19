import React from "react";
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionCreators";
import {Line} from "rc-progress";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/es/test/ButtonGroup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faQuestionCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {faCrown} from "@fortawesome/free-solid-svg-icons/faCrown";

const SummaryPage = ({name, correct, linePercent, wrong, quizName}) => {
    return (
        <div>
            <div className="summary-container">
            <Line percent={linePercent} strokeWidth="4" strokeColor="#3FC7FA"
                  trailColor="#878787"/>
            <h1>Well Done, {name}! <span><FontAwesomeIcon icon={faCrown}/></span></h1>
            <h2>You Completed The {quizName.toUpperCase()} Quiz</h2>
            <h3>You Answered 4 Question's <span className="text-black-50"><FontAwesomeIcon icon={faQuestionCircle}/></span></h3>
            <h3 className="summary-correct">You Have {correct} Correct Answer's <span><FontAwesomeIcon icon={faCheckCircle}/></span></h3>
            <h3 className="summary-wrong">You Have {wrong} Wrong Answer's <span><FontAwesomeIcon icon={faTimesCircle}/></span></h3>
            </div>
            <ButtonGroup>
            <Button>Redo Quiz</Button>
            <Button>Select Quiz</Button>
            <Button>New Player</Button>
            </ButtonGroup>
        </div>
    )};

const mapStateToProps = (state) => {
    const questions = state.pageView.questions;
    const activeQuestion = state.pageView.questions[state.pageView.activeQuestion];
    return {
        correct: state.scores.correctAnswers,
        wrong: state.scores.wrongAnswers,
        name: state.pageView.name,
        linePercent: state.pageView.linePercent,
        quizName: state.pageView.quiz
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuiz: (quiz) => dispatch(actionCreators.fetchingQuiz(quiz)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SummaryPage);