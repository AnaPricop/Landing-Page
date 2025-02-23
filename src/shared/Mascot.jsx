import React from 'react';
import { Image, Container } from 'react-bootstrap';
import mascotImage from '../assets/mascot.svg'; // Adjust the path to your image file (e.g., .png, .svg, etc.)
import pattern from '../assets/Pattern.svg';
import mascot from '../assets/mascot.svg';
import '../css/general.css';

const Mascot = ({ className, alt = 'Sally Robot Mascot' }) => {
    return (
        <Container className="images-hero-background">
            <Image
                src={pattern}
                alt={alt}
                fluid // Makes the image responsive and scales it to fit the container
                className="img-ellipse" // Allows custom styling via props
            />
        <Image
            src={mascot}
            alt={alt} style={{ zIndex: 3 }}
            fluid // Makes the image responsive and scales it to fit the container
            className="img-hero" // Allows custom styling via props
        />
        </Container>
    );
};

export default Mascot;