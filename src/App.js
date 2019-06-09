import React from 'react';
import './App.css';
import {connect} from "react-redux";
import WelcomePage from './pages/WelcomePage'
import ChooseQuiz from "./pages/ChooseQuiz";
import QuizPage from "./pages/QuizPage";

function App({view}) {
    // get active page: /welcome/ choose / quiz / summary
    switch (view) {
        case 'welcome':
            view = <WelcomePage/>
            break;
        case 'quiz':
            view = <QuizPage/>
            break;
        case 'choose':
            view = <ChooseQuiz/>
            break;
        case 'summary':
            view = <h1>summary</h1>
            break;
    }

    return (
        <div className="App">
            <header className="App-header">
                {view}
            </header>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        view: state.pageView.view,
    }
};


export default connect(mapStateToProps, null)(App);


