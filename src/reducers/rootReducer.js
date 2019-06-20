import {
    ADD_LINE_PERCENT,
    ADVANCE_QUESTION,
    CORRECT_ANSWER, FETCH_ERROR, FETCH_SUCCESS, SET_QUIZ, SET_VIEW_LOADING,
    SET_VIEW_SUMMARY,
    SET_VIEW_WELCOME,
    WRONG_ANSWER
} from "../actions/types";
import {SET_VIEW_QUIZ} from "../actions/types";
import {SET_USER_NAME} from "../actions/types";
import {combineReducers} from "redux";

const viewInitState = {
    name: '',
    view: 'welcome',
    quiz: "",
    questions: [],
    activeQuestion: 0,
    activeImage: 0,
    linePercent: 1,
    isLoading: false,
}

const scoreInitState = {
    correctAnswers: 0,
    wrongAnswers: 0,
    lastResults: [],
}

const viewReducer = (state = viewInitState, action) => {
    switch (action.type) {
        case SET_VIEW_WELCOME:
            return {
                ...state,
                view: 'welcome'
            };
        case SET_VIEW_QUIZ:
            return {
                ...state,
                view: 'quiz'
            };

        case SET_VIEW_SUMMARY:
            return {
                ...state,
                view: 'summary'
            }
        case SET_VIEW_LOADING:
            return {
                ...state,
                view: 'loading'
            }
        case SET_USER_NAME:
            return {
                ...state,
                name: action.payload,
                view: 'choose'
            };
        case ADD_LINE_PERCENT:
            return {
            ...state,
                linePercent: state.linePercent + 25,
            }
        case ADVANCE_QUESTION:
            return {
                ...state,
                activeQuestion: state.activeQuestion + 1,
                linePercent: state.linePercent + 25,
            }

        case SET_QUIZ:
            return {
                ...state,
                quiz: action.payload
            }

        case FETCH_SUCCESS:
            return {
                ...state,
                questions: action.payload
            }
        case FETCH_ERROR:
            return {
                ...state,
                view: 'error'
            }
    }
    return state;
};


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
    }
    return state;
}

const rootReducer = combineReducers({
    pageView: viewReducer,
    scores: scoresReducer,
});

export default rootReducer;
