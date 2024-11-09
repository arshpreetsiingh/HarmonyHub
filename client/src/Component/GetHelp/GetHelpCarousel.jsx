import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/1200/400?random=1" // Random image from Lorem Picsum
          alt="First slide"
          height={347}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Random image from Lorem Picsum</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/1200/400?random=2" // Random image from Lorem Picsum
          alt="Second slide"
          height={347}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Another random image</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/1200/400?random=3" // Random image from Lorem Picsum
          alt="Third slide"
          height={347}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>More randomness</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
