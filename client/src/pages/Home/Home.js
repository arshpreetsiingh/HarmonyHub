import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from '../../api/axios';
import Slider from 'react-slick';
import { FaUserAlt, FaHeartbeat, FaBriefcase, FaLaptopCode, FaBed, FaStar, FaHandshake, FaClock, FaClipboardCheck, FaUserCheck } from 'react-icons/fa';
import CountUp from 'react-countup';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 100%;
  overflow-x: hidden;
`;


const HeroSection = styled.section`
  width: 100%;
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  .slick-slide img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

const IntroductionWrapper = styled.section`
  padding: 50px 20px;
  text-align: center;
  background: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #123c69;
`;

const Description = styled.p`
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto;
  color: #333;
`;

const ServicesWrapper = styled.section`
  background: #eee2dc;
  padding: 50px 20px;
  text-align: center;
`;

const ServiceList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ServiceItem = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceIcon = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
  color: #123c69;
`;

const ServiceTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #123c69;
`;

const ServiceDescription = styled.p`
  font-size: 14px;
  text-align: center;
  color: #333;
`;

const MiddleSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  background-color: #f0f4f8;
  color: #2c3e50;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding-right: 0;
  margin-bottom: 30px;

  @media (min-width: 1024px) {
    padding-right: 50px;
    margin-bottom: 0;
  }
`;

const Subtitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const RightSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (min-width: 1024px) {
    flex: 1;
  }
`;

const Circle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  margin: 10px;
  background-color: #fff;
  color: #123c69;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CircleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

const CircleTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #123c69;
`;

const CircleDescription = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
  color: #555;
`;

const LearnMore = styled.span`
  font-size: 14px;
  color: #3498db;
  font-weight: bold;
`;

const StatisticsWrapper = styled.section`
  background: #f8f9fa;
  padding: 50px 20px;
  text-align: center;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  padding: 0 20px;
`;

const StatItem = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const StatIcon = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
  color: #123c69;
`;

const StatNumber = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #123c69;
`;

const StatDescription = styled.div`
  font-size: 14px;
  color: #555;
`;

const TestimonialWrapper = styled.section`
  background-color: #ac3b61;
  color: #fff;
  padding: 50px 20px;
  text-align: center;
`;

const TestimonialSlider = styled(Slider)`
  max-width: 800px;
  margin: 0 auto;
`;

const Testimonial = styled.div`
  outline: none;
`;

const Quote = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const Author = styled.p`
  font-weight: bold;
  font-size: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  height: 100px;
`;

const Button = styled.button`
  background-color: #edc7b7;
  color: #123c69;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #bfa89e;
  }
`;

export default function Component() {
  const [testimonials, setTestimonials] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [newTestimonial, setNewTestimonial] = useState({ quote: "", author: "" })
  const [inView, setInView] = useState(false)

  useEffect(() => {
    fetchTestimonials()
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 }
    )

    const statsSection = document.getElementById('statistics')
    if (statsSection) {
      observer.observe(statsSection)
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection)
      }
    }
  }, [])

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get('/api/testimonials')
      setTestimonials(response.data)
    } catch (error) {
      console.error("Error fetching testimonials:", error)
    }
  }

  const handleInputChange = (e) => {
    setNewTestimonial({ ...newTestimonial, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/testimonials', newTestimonial)
      setShowForm(false)
      setNewTestimonial({ quote: "", author: "" })
      fetchTestimonials()
    } catch (error) {
      console.error("Error submitting testimonial:", error)
    }
  }

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  const statsData = [
    { icon: FaUserAlt, number: 20, description: "Years of Experience", suffix: "+" },
    { icon: FaStar, number: 15, description: "Expert Therapists", suffix: "+" },
    { icon: FaHandshake, number: 100000, description: "Consultations", suffix: "+" },
    { icon: FaClipboardCheck, number: 75, description: "Client Improvement Rate", suffix: "%" },
  ]

  return (
    <Container>
      <HeroSection>
        <StyledSlider {...carouselSettings}>
          <div>
            <img src="https://static.wixstatic.com/media/1e81fc_39db906744204005b907291c4db2ce87~mv2.gif" alt="Mindfulness" />
          </div>
          <div>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e583bf71503887.5bc7a3379f8fb.gif" alt="Self-care" />
          </div>
        </StyledSlider>
      </HeroSection>

      <IntroductionWrapper>
        <Title>Welcome to Harmony Hub</Title>
        <Description>
          Harmony Hub provides comprehensive, accessible, and stigma-free mental health support. We're here to help you navigate life's challenges with resilience and confidence.
        </Description>
      </IntroductionWrapper>

      <ServicesWrapper>
        <Title>Our Services</Title>
        <ServiceList>
          {[
            { icon: FaUserAlt, title: "Isolation", description: "Combat loneliness and build meaningful connections." },
            { icon: FaHeartbeat, title: "Self-Care", description: "Learn to prioritize your emotional and physical well-being." },
            { icon: FaBriefcase, title: "Stress Management", description: "Develop strategies to cope with daily pressures." },
            { icon: FaLaptopCode, title: "Work-Life Balance", description: "Find harmony between your professional and personal life." },
            { icon: FaBed, title: "Better Sleep", description: "Improve your sleep quality for better mental health." },
          ].map((service, index) => (
            <ServiceItem key={index}>
              <ServiceIcon as={service.icon} />
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceItem>
          ))}
        </ServiceList>
      </ServicesWrapper>

      <MiddleSection>
        <LeftSection>
          <Title>Prioritize Your Mental Health</Title>
          <Subtitle>Achieve Success Through Balance</Subtitle>
          <Description>
            Harmony Hub offers a range of tools and resources to support your mental well-being. From personalized therapy to community support, we're here to help you thrive.
          </Description>
        </LeftSection>
        <RightSection>
          {[
            { title: "Mental Support 24x7", description: "Free Mental health support service available here 24x7", link: "#" },
            { title: "Paid Consultant", description: "Paid Consultancy Session just customized for you", link: "#" },
            { title: "Mental Health Test", description: "Check your mental health score now and know more about yourselves", link: "#" },
            { title: "Mental Health Games", description: "Play games that will help you to understand more about your mental health", link: "#" },
          ].map((item, index) => (
            <Circle key={index} href={item.link}>
              <CircleContent>
                <CircleTitle>{item.title}</CircleTitle>
                <CircleDescription>{item.description}</CircleDescription>
                <LearnMore>Learn More ➔</LearnMore>
              </CircleContent>
            </Circle>
          ))}
        </RightSection>
      </MiddleSection>

      <StatisticsWrapper id="statistics">
        <Title>Why choose us ?</Title>
        <StatsContainer>
          {statsData.map((stat, index) => (
            <StatItem key={index}>
              <StatIcon as={stat.icon} />
              <StatNumber>
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={4}
                    suffix={stat.suffix}
                  />
                )}
              </StatNumber>
              <StatDescription>{stat.description}</StatDescription>
            </StatItem>
          ))}
        </StatsContainer>
      </StatisticsWrapper>

      <TestimonialWrapper>
        <Title>Testimonials</Title>
        <TestimonialSlider {...testimonialSettings}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index}>
              <Quote>{testimonial.quote}</Quote>
              <Author>{testimonial.author}</Author>
            </Testimonial>
          ))}
        </TestimonialSlider>
        {!showForm && (
          <Button onClick={() => setShowForm(true)}>Add Comment</Button>
        )}
        {showForm && (
          <Form onSubmit={handleSubmit}>
            <TextArea
              name="quote"
              value={newTestimonial.quote}
              onChange={handleInputChange}
              placeholder="Your comment"
              required
            />
            <Input
              name="author"
              value={newTestimonial.author}
              onChange={handleInputChange}
              placeholder="Your name"
              required
            />
            <Button type="submit">Submit</Button>
            <Button type="button" onClick={() => setShowForm(false)}>Cancel</Button>
          </Form>
        )}
      </TestimonialWrapper>
    </Container>
  )
}
