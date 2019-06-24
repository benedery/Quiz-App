import React from "react";
import {connect} from "react-redux";
import {Line} from 'rc-progress'

const Status = ({correct, wrong, name, linePercent}) => {
    return (
        <div>
            <h4 className="text-shadow">Progress Bar</h4>
            <Line percent={linePercent} strokeWidth="4" strokeColor="#3FC7FA"
                  trailColor="#878787"/>
            <p className="text-shadow">Good Luck {name}, Correct:{correct} Wrong:{wrong}</p>
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