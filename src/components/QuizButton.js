import React from 'react';
import {connect} from "react-redux";


const QuizButton = ({quizBtnName}) => {

    return (
        <div>
        <button>{quizBtnName}</button>
        </div>
    )
}

export default QuizButton
// on click function
