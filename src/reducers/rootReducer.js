import {CORRECT_ANSWER, RESET_SCORES, WRONG_ANSWER} from "../actions/types";
import {combineReducers} from "redux";
import viewReducer from "./viewReducer";

const scoreInitState = {
    correctAnswers: 0,
    wrongAnswers: 0,
    lastResults: [],
}

const scoresReducer = (state = scoreInitState, action) => {
    switch (action.type) {
        case CORRECT_ANSWER:
            return {
                ...state,
                correctAnswers: state.correctAnswers + 1,
            }
        case WRONG_ANSWER:
            return {
                ...state,
                wrongAnswers: state.wrongAnswers + 1,
            }
        case RESET_SCORES:
            return {
                ...scoreInitState
            }
    }
    return state;
}

const rootReducer = combineReducers({
    pageView: viewReducer,
    scores: scoresReducer,
});

export default rootReducer;
