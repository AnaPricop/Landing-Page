import React from 'react';
import {Container, Row, Col, InputGroup, FormControl, Image} from 'react-bootstrap';
import '../../css/general.css';
import '../../css/features.css';
import elipse from "../../assets/Elipse.svg";
import elipse2 from "../../assets/Elipse2.svg";

const FeaturesSection = () => (
    <Container fluid>
        <Row className=" features-cont">
            <Col md={3} className="align-middle">
                <h3 className="features">Updated Main <span>Features</span></h3>
            </Col>


            <Col md={5} className="d-flex flex-row align-items-center text-left text-features">
                <Image
                    src={elipse}
                    fluid
                    className=""
                />
                <div className="d-flex flex-column text-feat">
                <h3 className="features-text ">Quick Response</h3>
                <h5 className="features-simple-text">Can respond to something
                    sensitive</h5>
                </div>
            </Col>
            <Col md={4} className="d-flex flex-row align-items-center text-left">
                <Image
                    src={elipse2}
                    fluid
                    className=""
                />
                <div className="d-flex flex-column text-feat">
                <h3 className="features-text">Sight Sensor</h3>
                <h5 className="features-simple-text">Updated visibility up to <br/>
                    2 km</h5>
                </div>
            </Col>
        </Row>
    </Container>
);

export default FeaturesSection;