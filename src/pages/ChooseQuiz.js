import React from 'react';
import {connect} from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import '../App.css'
import * as actionCreators from "../actions/actionCreators";

const ChooseQuiz = ({name, fetchQuiz}) => {
    return (
        <div>
            <div className="text-shadow">
                <h1>Hey {name}</h1>
                <h5>Good Luck, Please Choose A Quiz</h5>
                <br/>
            </div>
            <Carousel>
                <Carousel.Item onClick={() => fetchQuiz("sports")}>
                    <img
                        className="d-block img-carousel"
                        src={require("../img/cQuiz2.jpg")}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="text-shadow">
                        <h3>Sports Quiz</h3>
                        <p>Are You A Sport fan? Let's Check Your knowledge</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item onClick={() => fetchQuiz("comics")}>
                    <img
                        className="d-block img-carousel"
                        src={require("../img/cQuiz1.jpg")}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-shadow">
                        <h3>Comic's Quiz</h3>
                        <p>Batman ? SuperMan? Or Maybe You?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item onClick={() => fetchQuiz("history")}>
                    <img
                        className="d-block img-carousel"
                        src={require("../img/cQuiz3.jpeg")}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="text-shadow">
                        <h3>History Quiz</h3>
                        <p>How Good You Know History?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item onClick={() => fetchQuiz("computer")}>
                    <img
                        className="d-block img-carousel"
                        src={require("../img/cQuiz4.png")}
                        alt="fourth slide"
                    />
                    <Carousel.Caption className="text-shadow">
                        <h3>Computer Science Quiz</h3>
                        <p>Dreaming About Being A Developer?Check Your Skills</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        name: state.pageView.name,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuiz: (quiz) => dispatch(actionCreators.fetchingQuiz(quiz)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseQuiz);