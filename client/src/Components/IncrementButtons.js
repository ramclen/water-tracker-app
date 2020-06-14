import React, { useState } from 'react'
import Swipe from './Swipe'
import Button from './Button'
import { Col, Row } from 'react-bootstrap';

const IncrementButtons = ({ onClick }) => {
  const [amount, setAmount] = useState(150);

  return (
    <Col xs={12}>
      <Swipe onChange={(value) => setAmount(value)} />
      <Row>
        <Button onClick={() => onClick(-amount)} className="right" symbol="-" />
        <Button onClick={() => onClick(amount)} symbol="+" />
      </Row>
    </Col>
  )
}

export default IncrementButtons