import React from 'react';
import {Container, Row, Col, InputGroup, FormControl, Image} from 'react-bootstrap';
import Mascot from '../../shared/Mascot';
import CustomButton from '../../shared/Button';
import '../../css/hero.css';
import rtx from "../../assets/rtx.svg";
import infrared from "../../assets/infrared.svg";

const HeroClients = () => (
    <Container fluid>
        <Row>
            <Col md={5} className="hero-clients-text">
                <h3 className="clients">1500+ Clients</h3>
                <h5>Various clients around the world who have
                    used our products</h5>
            </Col>
        </Row>
    </Container>
);

export default HeroClients;