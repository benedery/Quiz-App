import React from 'react';
import {connect} from "react-redux";
import {
    ADVANCE_QUESTION,
    CORRECT_ANSWER,
    SET_VIEW_SUMMARY,
    WRONG_ANSWER
} from "../actions/types";
import Status from "../components/Status";

const QuizPage = ({text, options, onNext, correctIndex, isLast, img}) => {
    function onClick(answerIndex) {
        onNext(answerIndex, correctIndex,isLast);
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
            <img src={img} alt="" className="quiz-img"/>
            <h3 className="text-shadow mb-5 text-uppercase">{text}</h3>
            <ul className="p-0">
                {optionalAnswers}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    const questions = state.pageView.questions;
    const activeQuestion = state.pageView.questions[state.pageView.activeQuestion];
    return {
        allQuestions: questions,
        options: activeQuestion.options,
        text: activeQuestion.text,
        correctIndex: activeQuestion.correctIndex,
        isLast: state.pageView.activeQuestion === state.pageView.questions.length - 1,
        img:activeQuestion.img,
    }
};

const mapDispatchToProps = (dispatch) => ({
    onNext: (answerIndex, correctIndex, isLast) => {
        if (answerIndex === correctIndex) {
            dispatch({type: CORRECT_ANSWER});
        } else {
            dispatch({type: WRONG_ANSWER});
        }
        if(isLast) {
            dispatch({type:SET_VIEW_SUMMARY})
        }
        else{
            dispatch({type:ADVANCE_QUESTION})
        }
    }
});

export default connect(mapStateToProps,
    mapDispatchToProps)(QuizPage);