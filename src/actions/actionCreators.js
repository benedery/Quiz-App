import {SET_USER_NAME} from "./types";

export const setUserName = (name) => {
    return {
        type: SET_USER_NAME,
        payload: name
    }
};



// const nextQuestion = (answerIndex) => {
//     const correct = answerIndex === correctIndex;
//     const quizFinished = (activeQuestion + 1 === allQuestions.length);
//
//     if (correct) {
//         dispatch({type:CORRECT_ANSWER})
//         dispatch
//     } else {
//         setWrongAnswers(wrongAnswers + 1);
//     }
//
//     if (quizFinished) {
//         setActiveView(ActiveViewEmum.summary);
//     } else {
//         setActiveQuestion(activeQuestion + 1)
//     }
// };