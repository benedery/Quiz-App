import {
    FETCH_ERROR,
    FETCH_SUCCESS, REDO_QUIZ, RESET_QUIZ,
    RESET_SCORES,
    SET_QUIZ,
    SET_USER_NAME,
    SET_VIEW_LOADING,
    SET_VIEW_QUIZ, SUMMARYPAGE_MODE_TOGGLE
} from "./types";

// UpperCase user input and Set user name
export const setUserName = (name) => {
    let newName = name.toUpperCase()
    return {
        type: SET_USER_NAME,
        payload: newName
    }
};


export const selectQuiz = (quiz) => {
    return {
        type:SET_QUIZ,
        payload:quiz
    }
};

export const setViewLoading = () =>{
    return {
     type:SET_VIEW_LOADING,
    }
};

export const fetchQuizSuccess = (questions) => {
    return{
        type:FETCH_SUCCESS,
        payload:questions
    }
};

export const fetchQuizError = (error) =>{
    return {
        type:FETCH_ERROR,
        payload:error
    }
};

//reset all scores and set view to loading and starting fetching quiz
export const fetchingQuiz = (quiz,history)=> {
    return dispatch=> {
        dispatch(resetScoresAction());
        dispatch(resetQuizAction());
        dispatch(setViewLoading());
        dispatch(selectQuiz(quiz))
        fetch(`https://quizapp-366dc.firebaseio.com/quiz/${quiz}.json`)
            .then(res=>res.json())
            .then(res => {
                if(res.error) {
                    throw (res.error)
                }
                console.log(res);
                dispatch(fetchQuizSuccess(res));
                dispatch({type:SET_VIEW_QUIZ});
                history.push(`/quiz/${quiz}`)
                return res
            })
            .catch(error => {
                dispatch(fetchQuizError(error));
            })
    }
};

export const resetScoresAction = () => {
    return {
        type:RESET_SCORES
    }
};

export const redoQuizAction = () =>{
    return {
        type:REDO_QUIZ
    }
};

export const resetQuizAction = () => {
    return {
        type:RESET_QUIZ
    }
};

// enable summary page mode for end Case when user trying go back from summary page.
export const summaryPageModeAction = () => {
    return {
        type:SUMMARYPAGE_MODE_TOGGLE
    }
};

// redo quiz from (called from summary page)
export const summaryRedoQuiz = (history,quizName) => {
    return dispatch => {
        dispatch(summaryPageModeAction());
        dispatch(resetScoresAction());
        dispatch(redoQuizAction());
        history.push(`/quiz/${quizName}`);
    }
};
//select another quiz (called from summary page)
export const summarySelectQuiz = (history) => {
    return dispatch => {
        dispatch(summaryPageModeAction());
        dispatch(resetScoresAction());
        dispatch(resetQuizAction());
        history.push(`/quizselect`)
    }
};
//new player game (called from summary page)
export const summaryNewPlayer = (history)=> {
    return dispatch =>{
        dispatch(summaryPageModeAction());
        dispatch(resetScoresAction());
        dispatch(resetQuizAction());
        history.push(`/`);
    }
};
// select another quiz (called from navBar)
export const navBarSelectQuiz = (history) => {
    return dispatch => {
        dispatch(resetScoresAction());
        dispatch(resetQuizAction());
        history.push(`/quizselect`)
    }
};
//new player game (call from navBar)
export const navBarNewPlayer = (history)=> {
    return dispatch =>{
        dispatch(resetScoresAction());
        dispatch(resetQuizAction());
        history.push(`/`);
    }
};