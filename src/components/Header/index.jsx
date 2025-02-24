import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import CustomButton from '../../shared/Button';
import '../../css/general.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar expand="lg" className="m-auto ml-auto navbar-right">
            <Navbar.Brand href="#"><svg id="Logo" xmlns="http://www.w3.org/2000/svg" width="88" height="26" viewBox="0 0 88 26">
                <path id="Vector" d="M20.548,11.3a.69.69,0,0,0-.644-.47H11.617L16.4,1.053a.746.746,0,0,0-.186-.9.659.659,0,0,0-.873.02L.238,13.9a.747.747,0,0,0-.195.8.69.69,0,0,0,.643.471H8.974l-4.781,9.78a.746.746,0,0,0,.186.9.659.659,0,0,0,.873-.02L20.353,12.1A.748.748,0,0,0,20.548,11.3Z" fill="#fff"/>
                <path id="Vector-2" data-name="Vector" d="M37.789,6.86V8.818H34.725v10.14H32.419V8.818H29.355V6.86Z" fill="#fff"/>
                <path id="Vector-3" data-name="Vector" d="M47.955,13.949a6.02,6.02,0,0,1-.066.936H41.218a2.444,2.444,0,0,0,.692,1.629,2.074,2.074,0,0,0,1.5.589,1.875,1.875,0,0,0,1.828-1.161h2.487a4.426,4.426,0,0,1-1.516,2.288,4.3,4.3,0,0,1-2.751.884,4.669,4.669,0,0,1-2.372-.607,4.367,4.367,0,0,1-1.631-1.751,5.63,5.63,0,0,1-.577-2.6,5.67,5.67,0,0,1,.577-2.617,4.14,4.14,0,0,1,1.614-1.733A4.645,4.645,0,0,1,43.458,9.2a4.562,4.562,0,0,1,2.323.589,3.971,3.971,0,0,1,1.6,1.681A5.163,5.163,0,0,1,47.955,13.949Zm-2.389-.693a1.941,1.941,0,0,0-.642-1.491,2.188,2.188,0,0,0-1.532-.572,2.044,2.044,0,0,0-1.45.555,2.43,2.43,0,0,0-.708,1.508Z" fill="#fff"/>
                <path id="Vector-4" data-name="Vector" d="M49.045,14.157a5.563,5.563,0,0,1,.577-2.6,4.173,4.173,0,0,1,1.6-1.733A4.4,4.4,0,0,1,53.559,9.2a4.162,4.162,0,0,1,4.3,3.4H55.371a1.848,1.848,0,0,0-.675-.971,1.8,1.8,0,0,0-1.153-.364,1.858,1.858,0,0,0-1.565.763,3.423,3.423,0,0,0-.577,2.132,3.469,3.469,0,0,0,.577,2.132,1.873,1.873,0,0,0,1.565.745,1.756,1.756,0,0,0,1.828-1.317h2.487a4.46,4.46,0,0,1-1.5,2.479,4.27,4.27,0,0,1-2.8.919,4.492,4.492,0,0,1-2.339-.607,4.318,4.318,0,0,1-1.6-1.733A5.67,5.67,0,0,1,49.045,14.157Z" fill="#fff"/>
                <path id="Vector-5" data-name="Vector" d="M64.687,9.217a3.51,3.51,0,0,1,1.845.485,3.111,3.111,0,0,1,1.252,1.4,4.9,4.9,0,0,1,.461,2.219v5.633H65.939v-5.3A2.54,2.54,0,0,0,65.4,11.9a1.865,1.865,0,0,0-1.483-.624A1.934,1.934,0,0,0,62.4,11.9a2.54,2.54,0,0,0-.544,1.751v5.3H59.548V6.132h2.306v4.42a2.968,2.968,0,0,1,1.186-.971A3.687,3.687,0,0,1,64.687,9.217Z" fill="#fff"/>
                <path id="Vector-6" data-name="Vector" d="M71.46,19.08a1.361,1.361,0,0,1-1.433-1.421,1.369,1.369,0,0,1,.4-1.005,1.4,1.4,0,0,1,1.038-.416,1.326,1.326,0,0,1,1,.416,1.369,1.369,0,0,1,.4,1.005,1.428,1.428,0,0,1-.4,1.023A1.355,1.355,0,0,1,71.46,19.08Z" fill="#fff"/>
                <path id="Vector-7" data-name="Vector" d="M77.024,6.86v12.1H74.718V6.86Z" fill="#fff"/>
                <path id="Vector-8" data-name="Vector" d="M84.359,9.217A3.413,3.413,0,0,1,87,10.309a4.247,4.247,0,0,1,1,3.016v5.633H85.694v-5.3A2.54,2.54,0,0,0,85.15,11.9a1.865,1.865,0,0,0-1.483-.624,1.934,1.934,0,0,0-1.516.624,2.54,2.54,0,0,0-.544,1.751v5.3H79.3v-9.6h2.306v1.2a3.158,3.158,0,0,1,1.17-.971A3.474,3.474,0,0,1,84.359,9.217Z" fill="#fff"/>
            </svg>
            </Navbar.Brand>
            <Navbar.Toggle className=" ml-auto hidden-sm-up float-xs-right" onClick={() => setIsMenuOpen(!isMenuOpen)} />
            <Navbar.Collapse isOpen={isMenuOpen}>
                <Nav className="me-auto m-auto justify-content-center">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Product</Nav.Link>
                    <Nav.Link href="#">Resources</Nav.Link>
                    <Nav.Link href="#">Community</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                </Nav>
                <CustomButton variant="warning">Shop</CustomButton>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;