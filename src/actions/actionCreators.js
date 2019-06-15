import {FETCH_ERROR, FETCH_SUCCESS, SET_QUIZ, SET_USER_NAME, SET_VIEW_LOADING, SET_VIEW_QUIZ} from "./types";

export const setUserName = (name) => {
    return {
        type: SET_USER_NAME,
        payload: name
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

export const fetchingQuiz = (quiz)=> {
    return dispatch=> {
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
                return res
            })
            .catch(error => {
                dispatch(fetchQuizError(error));
            })
    }
};
