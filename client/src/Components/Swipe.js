import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';

const Swipe = () => {
  const values = [150, 250, 350];
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    console.log(values[selectedIndex])
  };

  return (
    <div className="row">
      <div className="col-12 swipe">
        <Carousel indicators={false} interval={null} activeIndex={index} onSelect={handleSelect}>
          {values.map((value) => {
            return (
              <Carousel.Item key={value}>
                <h3>{value} ml</h3>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
    </div>
  )
}

export default Swipe