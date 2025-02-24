import React from 'react';
import { useEffect, useState } from "react";
import {Container, Row, Col} from 'react-bootstrap';
// import TestimonialCard from '../../shared/TestimonialCard';
// import MascotImage from '../../shared/MascotImage';
import '../../css/general.css';
import '../../css/footer.css';

const Footer = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth < 760);

    const updateMedia = () => {
        setDesktop(window.innerWidth < 760);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        console.log(isDesktop);
        return () => window.removeEventListener("resize", updateMedia);
    });
    return(<footer className="footer">
        <Container className="">
            <Row className="justify-content-between align-items-start footer-row">
                <Col md={2} xs={6} className="text-start">
                    <h5>Menu</h5>
                    <h6>Home</h6>
                    <h6>Product</h6>
                    <h6>Resources</h6>
                    <h6>Community</h6>
                    <h6>Contact</h6>
                    <h6>About</h6>
                </Col>
                <Col md={2}xs={6} className="text-start">
                    <h5>Product</h5>
                    <h6>Robot</h6>
                    <h6>System AI</h6>
                    <h6>Stream</h6>
                    <h6>DNC</h6>
                </Col>
                <Col md={2} xs={6} className="text-start">
                    <h5>Solutions</h5>
                    <h6>System Error</h6>
                    <h6>Video Delivery</h6>
                    <h6>Payment</h6>
                    <h6>Processing</h6>
                </Col>
                <Col md={2} xs={6} className="text-start">
                    <h5>FAQ</h5>
                    <h6>Account</h6>
                    <h6>Manage Deliveries</h6>
                    <h6>Orders</h6>
                    <h6>Payments</h6>
                    <h6>Copyright</h6>
                    <h6>Language</h6>
                </Col>
                <Col md={2} xs={6} className="text-start">
                    <h5>Support</h5>
                    <h6>Online Chat</h6>
                    <h6>Open Live Chat</h6>
                    <h6>Call Center</h6>
                </Col>
                {isDesktop ? ( <Col  xs={6}className="text-start">
                        <h5>Developers</h5>
                        <h6>Developers Hub</h6>
                        <h6>Developers Call</h6>
                        <h6>API</h6>
                    </Col>
                    ) : ''}
            </Row>
            <Row className="justify-content-between align-items-start footer-row">
                <Col md={2} xs={6} className="text-start">
                </Col>
                <Col md={2} xs={6} className="text-start">

                </Col>
                {!isDesktop ? (
                <Col md={2} xs={6}className="text-start">
                    <h5>Developers</h5>
                    <h6>Developers Hub</h6>
                    <h6>Developers Call</h6>
                    <h6>API</h6>
                </Col>
                ) : ''}
                <Col md={2} xs={6}className="text-start">
                    <h5>Resources</h5>
                    <h6>System Network</h6>
                    <h6>Company Service</h6>
                    <h6>Assets AI</h6>
                </Col>
                <Col md={2} xs={6}className="text-start">

                </Col>
            </Row>
        </Container>
    </footer>
)};

export default Footer;