import React from 'react';
import {Container, Row, Col, InputGroup, FormControl, Image, Card, Carousel, Stack} from 'react-bootstrap';
import '../../css/general.css';
import '../../css/customers.css';
import arrow_left from "../../assets/arrow-left-circle.svg";
import arrow_right from "../../assets/arrow-right-circle.svg";

const CustomersCards = () => {
    const testimonials = [
        {
            quote: "I am very grateful to the developers who have created Sally's robot. Very helpful in my life. I hope you can develop in the future",
            name: "Craig Press",
            title: "Founder Digital Apps",
        },
        {
            quote: "I don’t have much to say, except it is a really, really good and affordable robot. Thanks, I hope we are going to help a lot in the future :)",
            name: "Paityn Septimus",
            title: "Software",
        },
        {
            quote: "So amazing this is the robot I dreamed of. Thank you Sally and the developer team, we are really waiting for other amazing products that you make in the future",
            name: "Alfonso Baptista",
            title: "Co Founder AI Technology",
        },
    ];
    return (
        // <Row className="justify-content-center">
        //     <Col md={10} xs={10} className="position-relative">
        //         <div className="testimonial-slider d-flex justify-content-center">
        //             {testimonials.map((testimonial, index) => (
        //                 <Card
        //                     key={index}
        //                     className="testimonial-card mx-3"
        //                     style={{width: '26vw', backgroundColor: '#FFFFFF', borderRadius: '0', borderWidth: '0'}}
        //                 >
        //                     <Card.Body className="d-flex flex-column justify-content-between">
        //                         <Card.Text className="text-muted text-start">{testimonial.quote}</Card.Text>
        //                         <div className="d-flex align-items-center text-start avatar-customer">
        //                             <div className="avatar-placeholder"></div>
        //                             <div className="ms-3 d-flex flex-column justify-content-center">
        //                                 <Card.Title className="mb-0">{testimonial.name}</Card.Title>
        //                                 <Card.Text className="text-muted small">{testimonial.title}</Card.Text>
        //                             </div>
        //                         </div>
        //                     </Card.Body>
        //                 </Card>
        //             ))}
        //         </div>
        //         <Container className="d-flex justify-content-center arrows">
        //             <Image
        //                 src={arrow_left}
        //                 className="px-2 arrow-img"
        //             />
        //             <Image
        //                 src={arrow_right}
        //                 className="px-2 arrow-img"
        //             />
        //         </Container>
        //
        //     </Col>
        // </Row>
        <Row className="justify-content-center">
            <Col md={10} xs={10} className="position-relative">
        <Carousel
            indicators={false}
            controls={true}
            interval={null} // Disable auto-sliding
            className="testimonial-slider d-flex justify-content-center"
        >

            <Carousel.Item className="testimonial-slider d-flex justify-content-center">
                {testimonials.map((testimonial, index) => (
                    <Card
                        className="testimonial-card "
                        style={{width: '26vw', backgroundColor: '#FFFFFF', borderRadius: '0', borderWidth: '0'}}
                    >
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <Card.Text className="text-muted text-start testimonial-card">{testimonial.quote}</Card.Text>
                            <div className="d-flex align-items-center text-start avatar-customer">
                                <div className="avatar-placeholder"></div>
                                <div className="ms-3 d-flex flex-column justify-content-center">
                                    <Card.Title className="mb-0">{testimonial.name}</Card.Title>
                                    <Card.Text className="text-muted small">{testimonial.title}</Card.Text>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </Carousel.Item>

        </Carousel>
    <Container className="d-flex justify-content-center arrows">
        <Image
            src={arrow_left}
            className="px-2 arrow-img"
        />
        <Image
            src={arrow_right}
            className="px-2 arrow-img"
        />
    </Container>
            </Col>
        </Row>
    )
};

export default CustomersCards;