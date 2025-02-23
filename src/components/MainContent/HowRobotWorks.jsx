import React from 'react';
import {Container, Row, Col, InputGroup, FormControl, Image} from 'react-bootstrap';
import '../../css/general.css';
import '../../css/howrobotworks.css';
import '../../assets/fulger.svg';
import robot from "../../assets/robot.svg";
import arrow from "../../assets/arrow-right.svg";
import arrowwhite from "../../assets/arrow-right-white.svg";
import card3 from "../../assets/Card3.svg";
import sally from "../../assets/sally_bottom.svg";

const HowRobotWorks = () => (
    <Container fluid className="how-robot-works">
        <Container fluid className="how-robot-works-first">
            <Row className="">
                <Col md={6}>
                    <Image
                        src={robot}
                        fluid
                        className="img-hero-works"
                    />
                </Col>
                <Col md={6} className="container-sally">
                    <h2>See how Sally's
                        robot system works</h2>
                    <h6 className="sally-robot">Sally's robot works through voices that have been previously recorded to
                        be input into the
                        technological thinking system</h6>
                    <h6 className="read-more">Read more <span className="read-more-arrow"> <Image
                        src={arrow}
                        fluid
                        className=""
                    /></span></h6>
                </Col>
            </Row>
        </Container>
        <Container className="how-robot-works-second">
            <Row>
                <Col md={6}>

                </Col>
                <Col md={6}>
                    <h2 className="text-end">How to use sally robot
                        to be more optimal</h2>
                </Col>
            </Row>
            <Row style={{'paddingTop': '5.1vw'}}>
                <Col md={4} className="text-start">
                    <h3 className="sally-title">01</h3>
                    <h3>Keep Battery Power</h3>
                    <h6 className="sally-description">Maintain a healthy battery where Sally's robot doesn't run out of power quickly. This can cause
                        the system to not run optimally</h6>
                </Col>
                <Col md={4} className="text-start">
                    <h3 className="sally-title">02</h3>
                    <h3>System Health</h3>
                    <h6 className="sally-description">Maintaining cleanliness is very important
                        to make the air circulation released by
                        Sally's robot can be expelled smoothly.
                        this can cause heat to the system or
                        damage</h6>
                </Col>
                <Col md={4} className="text-start" style={{'z-index': '2'}}>
                    <h3 className="sally-title">03</h3>
                    <h3>Redundant System</h3>
                    <h6 className="sally-description">A Sally's robot has a command capacity
                        that is served with a minimum of 5
                        commAands that use this excessive
                        command causing an error in the
                        system</h6>
                </Col>
                <Image
                    src={sally}
                    fluid
                    className="sally-bottom"
                />
            </Row>
        </Container>
    </Container>
);

export default HowRobotWorks;