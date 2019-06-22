import React from "react";
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionCreators";
import {Line} from "rc-progress";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/es/test/ButtonGroup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faQuestionCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {faCrown} from "@fortawesome/free-solid-svg-icons/faCrown";
import {withRouter} from "react-router-dom";

const SummaryPage = ({
                         name, correct, linePercent, wrong,
                         quizName, redoQuizBtnHandler, history,
                         selectQuizBtnHandler, newPlayerHandler
                     }) => {
    return (
        <div>
            <div className="summary-container">
                <Line percent={linePercent} strokeWidth="4" strokeColor="#3FC7FA"
                      trailColor="#878787"/>
                <h1>Well Done, {name}! <span><FontAwesomeIcon icon={faCrown}/></span></h1>
                <h2>You Completed The {quizName.toUpperCase()} Quiz</h2>
                <h3>You Answered 4 Question's <span className="text-black-50"><FontAwesomeIcon icon={faQuestionCircle}/></span>
                </h3>
                <h3 className="summary-correct">You Have {correct} Correct Answer's <span><FontAwesomeIcon
                    icon={faCheckCircle}/></span></h3>
                <h3 className="summary-wrong">You Have {wrong} Wrong Answer's <span><FontAwesomeIcon
                    icon={faTimesCircle}/></span></h3>
            </div>
            <ButtonGroup>
                <Button onClick={() => redoQuizBtnHandler(history, quizName)}>Redo Quiz</Button>
                <Button onClick={() => selectQuizBtnHandler(history)}>Select Quiz</Button>
                <Button onClick={() => newPlayerHandler(history)}>New Player</Button>
            </ButtonGroup>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        correct: state.scores.correctAnswers,
        wrong: state.scores.wrongAnswers,
        name: state.pageView.name,
        linePercent: state.pageView.linePercent,
        quizName: state.pageView.quiz,
        activeQuestion: state.pageView.activeQuestion
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        redoQuizBtnHandler: (history, quizName) => dispatch(actionCreators.summaryRedoQuiz(history, quizName)),
        selectQuizBtnHandler: (history) => dispatch(actionCreators.summarySelectQuiz(history)),
        newPlayerHandler: (history) => dispatch(actionCreators.summaryNewPlayer(history))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SummaryPage));