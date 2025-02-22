import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Hero from './Hero';
// import Features from './Features';
// import UpdateSection from './UpdateSection';
// import RobotShowcase from './RobotShowcase';
// import OptimizationTips from './OptimizationTips';
// import CallToAction from './CallToAction';
import '../../css/general.css';
import '../../css/hero.css';

const MainContent = () => {
    return (
        <Container className="hero-container">
            {/*<Row>*/}
            {/*    <Col  xs={12} md={6} lg={4}>1 of 3</Col>*/}
            {/*    <Col  xs={12} md={6} lg={4}>2 of 3 (wider)</Col>*/}
            {/*    <Col  xs={12} md={6} lg={4} xxl={4}>3 of 3</Col>*/}
            {/*</Row>*/}
            {/*<Row>*/}
            {/*    <Col>1 of 3</Col>*/}
            {/*    <Col xs={5}>2 of 3 (wider)</Col>*/}
            {/*    <Col>3 of 3</Col>*/}
            {/*</Row>*/}
            <Hero />
            {/*<Features />*/}
            {/*<UpdateSection />*/}
            {/*<RobotShowcase />*/}
            {/*<OptimizationTips />*/}
            {/*<CallToAction />*/}
        </Container>
    );
};

export default MainContent;