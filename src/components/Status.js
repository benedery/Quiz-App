import React from "react";
import {connect} from "react-redux";
import {Line} from 'rc-progress'

const Status = ({correct, wrong, name, linePercent}) => {

    return (
        <div>
            <h4>Progress Bar</h4>
            <Line percent={linePercent} strokeWidth="4" strokeColor="#3FC7FA"
                  trailColor="#878787"/>
            <p>Good Luck {name}, Correct:{correct} Wrong:{wrong}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    const questions = state.pageView.questions;
    const activeQuestion = state.pageView.questions[state.pageView.activeQuestion];
    return {
        correct: state.scores.correctAnswers,
        wrong: state.scores.wrongAnswers,
        name: state.pageView.name,
        linePercent: state.pageView.linePercent
    }
};


export default connect(mapStateToProps,
    null)(Status);