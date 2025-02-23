import React from 'react';
import {Container, Row, Col, InputGroup, FormControl, Image} from 'react-bootstrap';
import Mascot from '../../shared/Mascot';
import CustomButton from '../../shared/Button';
import '../../css/general.css';
import '../../css/hero.css';
import rtx from "../../assets/rtx.svg";
import infrared from "../../assets/infrared.svg";
const Hero = () => (
    <Container fluid>
        <Row>
            <Col md={7}>
                <h1>MAKE YOUR PERSONALITY INTO TECHNOLOGY.</h1>
                <Col md={8}>
                <h6>Robot technology is faster with the latest systems that make it possible your partner and ready to
                    serve your needs. Enter email to get product launch information</h6>

                <InputGroup className="mb-6 hero-input">
                    <FormControl placeholder="Search..."/>
                    <CustomButton variant="submit">Submit</CustomButton>
                </InputGroup>
                <Row>
                    <Col md={6} className="justify-content-center text-center hero-group">
                        <Image
                            src={rtx}
                            fluid // Makes the image responsive and scales it to fit the container
                            className="img-rtx " // Allows custom styling via props
                        />

                        <h5 className="text-center text-hero-group">
                            Using the <strong>RTX-1134 </strong> processor
                        </h5>
                    </Col>
                    <Col md={6} className="justify-content-center text-center hero-group">
                        <Image
                            src={infrared}
                            fluid // Makes the image responsive and scales it to fit the container
                            className="img-rtx " // Allows custom styling via props
                        />

                        <h5 className="text-center text-hero-group-infrared">
                            Use
                            infrared
                        </h5>
                    </Col>
                </Row>
                </Col>
            </Col>
            <Col md={5} ><Mascot/></Col>
        </Row>
    </Container>
);

export default Hero;