import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './whatwedo.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const WhatWeDo = () => {
  const services = [
    {
      title: "Cognitive Behavioral Therapy",
      description: "CBT helps identify and change negative thought patterns and behaviors. It's effective for treating anxiety, depression, and other mental health issues.",
      imgSrc: "https://cdn.myportfolio.com/d6dfc00a-94d4-4423-8216-3fd93296b209/c96227a4-e406-4848-8ea7-9a864edba18a_rw_1200.gif?h=135338f042f602fe3196ddb0ea450fae",
      alt: "Cognitive Behavioral Therapy"
    },
    {
      title: "Mindfulness-Based Therapy",
      description: "This approach combines mindfulness techniques with therapy to help manage stress, improve focus, and enhance overall well-being.",
      imgSrc: "https://i.pinimg.com/originals/9d/23/6d/9d236dc22e9f8e83235b170b51f0080c.gif",
      alt: "Mindfulness-Based Therapy"
    },
    {
      title: "Trauma-Informed Care",
      description: "Our trauma-informed approach recognizes the impact of past experiences on mental health and provides a safe, supportive environment for healing.",
      imgSrc: "https://cdn.dribbble.com/users/2302565/screenshots/6630253/jakehawkins.gif",
      alt: "Trauma-Informed Care"
    }
  ];

  return (
    <Container fluid className="what-we-do-container">
      <Row className="justify-content-center">
        <Col md={5} className="text-center">
          <div className="what-we-do-heading">What We Do</div>
          <div className="what-we-do-subheading">
            At Harmony Hub, we provide comprehensive mental health support through various therapeutic approaches and services.
          </div>
        </Col>
      </Row>
      <Row className="cards-container">
        {services.map((service, index) => (
          <Col key={index} md={4}>
            <Card className="cards">
              <CardMedia
                component="img"
                alt={service.alt}
                height="140"
                image={service.imgSrc}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhatWeDo;