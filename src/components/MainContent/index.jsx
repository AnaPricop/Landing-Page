import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Hero from './Hero';
import HeroClients from './HeroClients';
import FeaturesSection from './FeaturesSection';
import UpdatedVersion from './UpdatedVersion';
import HowRobotWorks from './HowRobotWorks';
// import UpdateSection from './UpdateSection';
// import RobotShowcase from './RobotShowcase';
// import OptimizationTips from './OptimizationTips';
// import CallToAction from './CallToAction';
import '../../css/general.css';
import '../../css/hero.css';
import CustomersSection from "./CustomersSection";

const MainContent = () => {
    return (
        <Container>
            <Container className="hero-container">
                <Hero/>
            </Container>

            <Container className="hero-clients-container position-relative" style={{zIndex: 2}}>
                <HeroClients/>
            </Container>

            <Container className="features-container">
                <FeaturesSection/>
                <UpdatedVersion/>
            </Container>

            <HowRobotWorks/>
            <CustomersSection/>

            {/*<UpdateSection />*/}
            {/*<RobotShowcase />*/}
            {/*<OptimizationTips />*/}
            {/*<CallToAction />*/}
        </Container>
    );
};

export default MainContent;