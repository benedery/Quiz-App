import {
    ADD_LINE_PERCENT, ADVANCE_QUESTION, FETCH_ERROR, FETCH_SUCCESS, REDO_QUIZ, RESET_QUIZ, SET_QUIZ,
    SET_USER_NAME,
    SET_VIEW_LOADING, SET_VIEW_QUIZ, SUMMARYPAGE_MODE_TOGGLE,
} from "../actions/types";

const viewInitState = {
    name: '',
    view: 'welcome',
    quiz: "",
    questions: [],
    activeQuestion: 0,
    activeImage: 0,
    linePercent: 1,
    isLoading: false,
    summaryPageMode: false
};

const viewReducer = (state = viewInitState, action) => {
    switch (action.type) {
        case SET_VIEW_LOADING:
            return {
                ...state,
                view: 'loading'
            }
        case SET_VIEW_QUIZ:
            return {
                ...state,
                view: 'quiz'
            };
        case SET_USER_NAME:
            return {
                ...state,
                name: action.payload
            };
        case ADD_LINE_PERCENT:
            return {
                ...state,
                linePercent: state.linePercent + 25,
            };
        case ADVANCE_QUESTION:
            return {
                ...state,
                activeQuestion: state.activeQuestion + 1,
                linePercent: state.linePercent + 25,
            };
        case SET_QUIZ:
            return {
                ...state,
                quiz: action.payload
            };

        case FETCH_SUCCESS:
            return {
                ...state,
                questions: action.payload
            };
        case FETCH_ERROR:
            return {
                ...state,
                view: 'error'
            };
        case REDO_QUIZ:
            return {
                ...state,
                activeQuestion: 0,
                activeImage: 0,
                linePercent: 1,
            };
        case RESET_QUIZ:
            return {
                ...state,
                quiz: "",
                activeQuestion: 0,
                activeImage: 0,
                linePercent: 1,
            };
        case SUMMARYPAGE_MODE_TOGGLE:
            return {
                ...state,
                summaryPageMode: !state.summaryPageMode,
            }
        default:
            return state;
    }
};

export default viewReducer
