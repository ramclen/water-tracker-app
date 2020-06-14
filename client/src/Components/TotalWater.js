import React from 'react'
import { Col } from 'react-bootstrap'

const TotalWater = ({ total }) => {
  return (
    <Col xs={6}>
      <h1>{total / 1000} L</h1>
      <p className="subText">Total water drunk</p>
    </Col>
  )
}

export default TotalWater