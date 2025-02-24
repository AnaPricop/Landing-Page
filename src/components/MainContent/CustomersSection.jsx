import React from 'react';
import {Container, Row, Col, InputGroup, FormControl, Image, Card, Button} from 'react-bootstrap';
import '../../css/general.css';
import '../../css/customers.css';
import CustomersCards from "./CustomersCards";
import customers from "../../assets/customers.svg";
import CustomButton from "../../shared/Button";

const CustomersSection = () => {
        return (
            <Container className="customers-section">
                <Row className="justify-content-center mb-4">
                    <Col md={8} className="text-center text-white">
                        <h2 className="section-customer">Trusted by over <span
                            className="purple-section">320K</span><br/> Founder customers</h2>
                    </Col>
                </Row>

                <CustomersCards/>

                <Row className="justify-content-center get-it">
                    <Col md={6} className="text-start">
                        <h3 className="">Let’s get it now</h3>
                        <h5 className="get-it-description">
                            Make your video experience amazing and join thousands of satisfied customers already using Robot
                            Sally
                        </h5>

                    </Col>
                    <Col md={3}>

                    </Col>
                    <Col md={3} className="text-end justify-content-end align-self-end">
                        {/*<Button variant="warning" size="lg">*/}
                        {/*    Preorder Now*/}
                        {/*</Button>*/}
                        <CustomButton variant="warning">Preorder Now</CustomButton>
                        <h5 className="description-button text-end ">
                            Sally's robot is only made limited, so who's quick he gets
                        </h5>
                    </Col>
                </Row>
            </Container>

        )
    }
;

export default CustomersSection;