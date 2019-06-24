import React from 'react';
import {connect} from "react-redux";
import {ADD_LINE_PERCENT, ADVANCE_QUESTION, CORRECT_ANSWER, WRONG_ANSWER} from "../actions/types";
import Status from "../components/Status";
import {withRouter} from "react-router-dom";

const QuizPage = ({text, options, onNext, correctIndex, isLast, imgId, history, quizName, activeQuestion}) => {
    function onClick(answerIndex) {
        onNext(answerIndex, correctIndex, isLast, history, quizName, activeQuestion);
    }

    const optionalAnswers = options.map((q, i) => (
        <li key={i} className="quiz-li" onClick={onClick.bind(null, i)}>
            <label>
                <span>{q}</span>
            </label>
        </li>
    ));
    return (
        <div>
            <Status/>
            <img src={require(`../img/${imgId}.jpeg`)} alt="" className="quiz-img"/>
            <h3 className="text-shadow mb-5 text-uppercase">{text}</h3>
            <ul className="p-0">
                {optionalAnswers}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    const questions = state.pageView.questions;
    const presentQuestion = state.pageView.questions[state.pageView.activeQuestion];
    return {
        allQuestions: questions,
        options: presentQuestion.options,
        text: presentQuestion.text,
        correctIndex: presentQuestion.correctIndex,
        isLast: state.pageView.activeQuestion === state.pageView.questions.length - 1,
        imgId: presentQuestion.imgId,
        quizName: state.pageView.quiz,
        activeQuestion:state.pageView.activeQuestion
    }
};

const mapDispatchToProps = (dispatch) => ({
    onNext: (answerIndex, correctIndex, isLast, history,quizName, activeQuestion) => {
        if (answerIndex === correctIndex) {
            dispatch({type: CORRECT_ANSWER});
        } else {
            dispatch({type: WRONG_ANSWER});
        }
        if (isLast) {
            dispatch({type:ADD_LINE_PERCENT});
            history.push("/summary")
        } else {
            dispatch({type: ADVANCE_QUESTION})
            history.push(`/quiz/${quizName}/${activeQuestion + 1}`)
        }
    }
});

export default withRouter(connect(mapStateToProps,
    mapDispatchToProps)(QuizPage));