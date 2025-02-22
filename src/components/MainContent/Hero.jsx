import React from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import Mascot from '../../shared/Mascot';
import CustomButton from '../../shared/Button';
import '../../css/hero.css';
const Hero = () => (
    <Container fluid>
        <Row>
            <Col md={6}>
                <h1>MAKE YOUR PERSONALITY INTO TECHNOLOGY</h1>
                <h5>Robot technology is faster with the latest systems that make it possible your partner and ready to serve your needs. Enter email to get product launch information</h5>
                <InputGroup className="mb-3 hero-input">
                    <FormControl placeholder="Search..." />
                    <CustomButton variant="submit">Submit</CustomButton>
                </InputGroup>

            </Col>
            <Col md={6}><Mascot /></Col>
        </Row>
    </Container>
);

export default Hero;