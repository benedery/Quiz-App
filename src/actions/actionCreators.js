import {
    FETCH_ERROR,
    FETCH_SUCCESS, REDO_QUIZ, RESET_QUIZ,
    RESET_SCORES,
    SET_QUIZ,
    SET_USER_NAME,
    SET_VIEW_LOADING,
    SET_VIEW_QUIZ, SUMMARYPAGE_MODE_TOGGLE
} from "./types";

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
}

export const fetchQuizError = (error) =>{
    return {
        type:FETCH_ERROR,
        payload:error
    }
}

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

export const summaryPageModeAction = () => {
    return {
        type:SUMMARYPAGE_MODE_TOGGLE
    }
};

export const summaryRedoQuiz = (history,quizName) => {
    return dispatch => {
        dispatch(summaryPageModeAction());
        dispatch(resetScoresAction());
        dispatch(redoQuizAction());
        history.push(`/quiz/${quizName}`);
    }
};

export const summarySelectQuiz = (history) => {
    return dispatch => {
        dispatch(summaryPageModeAction());
        dispatch(resetScoresAction());
        dispatch(resetQuizAction());
        history.push(`/quizselect`)
    }
};

export const summaryNewPlayer = (history)=> {
    return dispatch =>{
        dispatch(summaryPageModeAction());
        dispatch(resetScoresAction());
        dispatch(resetQuizAction());
        history.push(`/`);
    }
};

export const navBarSelectQuiz = (history) => {
    return dispatch => {
        dispatch(resetScoresAction());
        dispatch(resetQuizAction());
        history.push(`/quizselect`)
    }
};

export const navBarNewPlayer = (history)=> {
    return dispatch =>{
        dispatch(resetScoresAction());
        dispatch(resetQuizAction());
        history.push(`/`);
    }
};