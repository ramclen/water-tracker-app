import React from 'react'
import './button.css'
import { Col } from 'react-bootstrap'
const Button = ({ onClick, symbol, className }) => {
  return (
    <Col xs={6} className={className}>
      <button onClick={onClick} className="button">
        <span>{symbol}</span>
      </button>
    </Col>
  )
}

export default Button