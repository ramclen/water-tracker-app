import React, { useState } from 'react'
import { Carousel, Row, Col } from 'react-bootstrap';

const Swipe = ({ onChange }) => {
  const values = [150, 250, 350];
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    onChange(values[selectedIndex])
    setIndex(selectedIndex);
  };

  return (
    <Row>
      <Col xs={12} className="swipe">
        <Carousel indicators={false} interval={null} activeIndex={index} onSelect={handleSelect}>
          {values.map((value) => {
            return (
              <Carousel.Item key={value}>
                <h3>{value} ml</h3>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </Col>
    </Row>
  )
}

export default Swipe