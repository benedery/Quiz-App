
import {
    ADVANCE_CORRECT,
    ADVANCE_QUESTION,
    CORRECT_ANSWER,
    SET_VIEW_SUMMARY,
    SET_VIEW_WELCOME,
    WRONG_ANSWER
} from "../actions/types";
import {SET_VIEW_QUIZ} from "../actions/types";
import {SET_USER_NAME} from "../actions/types";
import {combineReducers} from "redux";

const viewInitState = {
    name:'',
    view:'quiz',
    quiz: "",
    questions: [
        {
            img:require("../img/quiz1q1.jpeg"),
            id: 'q1',
            text: 'The name of WHICH US state is thought to have been made up as the result of a hoax?',
            options: ['Iowa', 'Minnesota', 'Idaho', 'Michigan'],
            correctIndex: 2
        },
        {
            id: 'q2',
            text: 'The capital of Cuba is which of the following?',
            options: ['Guantanamo Bay', 'Tijuana', 'San Jose', 'Havana'],
            correctIndex: 3
        },
        {
            id: 'q3',
            text: 'Aside from Denmark, Danish is the official language of WHICH other country?',
            options: ['Greenland', 'Germany', 'Iceland', 'Finland'],
            correctIndex: 0
        }
    ],
    activeQuestion:0,
    linePercent: 25,

}

const scoreInitState ={
    correctAnswers:0,
    wrongAnswers:0,
    topRanked: [],

}



const viewReducer = (state = viewInitState, action) =>{
    switch (action.type) {
        case SET_VIEW_WELCOME:
        return {...state,
        view:'welcome'
        };
        case SET_VIEW_QUIZ:
            return {
                ...state,
                view:'quiz'
            };

        case SET_VIEW_SUMMARY:
            return {
                ...state,
                view:'summary'
            }
        case SET_USER_NAME:
            return {
                ...state,
                name:action.payload,
                view:'choose'
            };

        case ADVANCE_QUESTION:
            return {
                ...state,
                activeQuestion: state.activeQuestion + 1,
                linePercent:state.linePercent + 25,
            }
    }
    return state;
};


const scoresReducer = (state=scoreInitState, action) =>{
    switch (action.type){
        case CORRECT_ANSWER:
            return {
                ...state,
                correctAnswers: state.correctAnswers + 1,
            }
        case WRONG_ANSWER:
            return {
                ...state,
                wrongAnswers:state.wrongAnswers + 1,
            }


    }
    return state;
}

const rootReducer = combineReducers({
        pageView: viewReducer,
        scores: scoresReducer,
    });


// 1. create Combine Reducers - view + score v
//git hub
//2. set photo And design in question.
//3. make 4 json files.
//4. api call
//5. progress bar and status comp V - need more design
//6.summary page



export default rootReducer;



// const initialState = {
//     name:'',
//     view:'quiz',
//     correctAnswers:0,
//     wrongAnswers:0,
//     topRanked: [],
//     question: [
//         {
//             id: 'q1',
//             text: 'The name of WHICH US state is thought to have been made up as the result of a hoax?',
//             options: ['Iowa', 'Minnesota', 'Idaho', 'Michigan'],
//             correctIndex: 2
//         },
//         {
//             id: 'q2',
//             text: 'The capital of Cuba is which of the following?',
//             options: ['Guantanamo Bay', 'Tijuana', 'San Jose', 'Havana'],
//             correctIndex: 3
//         },
//         {
//             id: 'q3',
//             text: 'Aside from Denmark, Danish is the official language of WHICH other country?',
//             options: ['Greenland', 'Germany', 'Iceland', 'Finland'],
//             correctIndex: 0
//         }
//     ],
//     quiz: "",
//     activeQuestion:0,
// };