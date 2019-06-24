import React from 'react';
import './App.scss';
import {connect} from "react-redux";
import WelcomePage from './pages/WelcomePage'
import ChooseQuiz from "./pages/ChooseQuiz";
import QuizPage from "./pages/QuizPage";
import ReactLoading from 'react-loading';
import SummaryPage from "./pages/SummaryPage";
import {Route, Switch} from "react-router-dom";
import AppNavBar from './components/AppNavBar'

const Routes = ({quizName, activeQuestion}) => {
    return (
        <div>
            <Switch>
                <Route path="/" component={WelcomePage} exact/>
                <Route path="/quizselect" component={ChooseQuiz} exact/>
                <Route path="/quiz" component={QuizPage} exact/>
                <Route path="/summary" component={SummaryPage} exact/>
                <Route path="/quiz/:qname" component={QuizPage}/>
                <Route path="/quiz/:qname/:question" component={QuizPage}/>
            </Switch>
        </div>
    )
};

function App({view}) {
if (view === 'loading') {
    return (
        <div className="App">
            <header className="App-header">
                <div className="loading">
                    <ReactLoading className="text-center" type="spokes" height={100} width={100}/>
                </div>
            </header>
        </div>
    )
}
else
return (
    <div>
        <AppNavBar />
    <div className="App">
        <header className="App-header">
            <Routes/>
        </header>
    </div>
    </div>
)
}

const mapStateToProps = (state) => {
    return {
        view: state.pageView.view,
        quizName: state.pageView.quiz,
        activeQuestion:state.pageView.questions[state.pageView.activeQuestion],
    }
};

export default connect(mapStateToProps, null)(App);


