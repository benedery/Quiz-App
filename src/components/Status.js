import React from "react";
import {connect} from "react-redux";
import {Line} from 'rc-progress'

const Status = ({correct, wrong, name, linePercent}) => {
    return (
        <div className="font-weight-bold">
            <h4 className="text-shadow">Progress Bar</h4>
            <Line percent={linePercent} strokeWidth="4" strokeColor="#3FC7FA"
                  trailColor="#878787"/>
            <p className="text-shadow status-info">Good Luck {name}, <span className="status-correct">Correct:{correct}</span>
                <span className="status-wrong"> Wrong:{wrong}</span></p>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        correct: state.scores.correctAnswers,
        wrong: state.scores.wrongAnswers,
        name: state.pageView.name,
        linePercent: state.pageView.linePercent
    }
};

export default connect(mapStateToProps,
    null)(Status);