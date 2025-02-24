import React from 'react';
import {Container, Row, Col, InputGroup, FormControl, Image} from 'react-bootstrap';
import '../../css/general.css';
import '../../css/updatedversion.css';
import '../../assets/fulger.svg';
import fulger from "../../assets/fulger.svg";
import card1 from "../../assets/Card1.svg";
import card2 from "../../assets/Card2.svg";
import card3 from "../../assets/Card3.svg";
import arrow from "../../assets/arrow-right.svg";
import arrowwhite from "../../assets/arrow-right-white.svg";

const UpdatedVersion = () => (
    <Container fluid>
        <Row className="updated-version-container">
            <Col md={5} xs={6} className="align-middle">
                <h2 className="updated-version">See the latest <span><Image
                    src={fulger}
                    fluid
                    className=""
                /></span> updated version</h2>
            </Col>
            <Col md={2} className="align-middle">
            </Col>
            <Col md={5} className="align-middle">
                <h5 className="version-font">Update your system to the latest <span className="version-font-purple">Version 2.3</span> with
                    a
                    technology version using the new RTX-1134 processor
                    for a <span className="version-font-purple"> much better experience </span></h5>
            </Col>
        </Row>

        <Row className="updated-version-container-2">
            <Col md={4} className="text-start simple-card" style={{'paddingRight': '50px'}}>
                <Image
                    src={card1}
                    fluid
                    className=""
                />
                <h3 className="features">Using 25,000 Mah <br/>
                    Battery</h3>
                <h6>Sally's robot can last up to a week and
                    uses the BT 331 Gold series fast charging which can be charged for 30 minutes</h6>
                <h6 className="read-more">Read more <span className="read-more-arrow"> <Image
                    src={arrow}
                    fluid
                    className=""
                /></span></h6>
            </Col>
            <Col md={4} className="text-start middle-card" style={{'paddingRight': '50px'}}>
                <Image
                    src={card2}
                    fluid
                    className=""
                />
                <h3 className="features">Human Thinking <br/>
                    Technology</h3>
                <h6>Sally's modified robot can think like a
                    human using IEA 223 technology with
                    the Z364XT thinking system</h6>
                <h6 className="read-more">Read more <span className="read-more-arrow"> <Image
                    src={arrowwhite}
                    fluid
                    className=""
                /></span></h6>
            </Col>
            <Col md={4} className="text-start simple-card simple-card-last">
                <Image
                    src={card3}
                    fluid
                    className=""
                />
                <h3 className="features">Quick Response In
                     <br/> All Orders
                    Battery</h3>
                <h6>Technology connects listeners using a
                    microphone IC 2469 KG with a response
                    speed of 0.3 seconds</h6>
                <h6 className="read-more">Read more <span className="read-more-arrow"> <Image
                    src={arrow}
                    fluid
                    className=""
                /></span></h6>
            </Col>
        </Row>
    </Container>
);

export default UpdatedVersion;