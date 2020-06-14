import React from 'react'
import './button.css'
const Button = ({ onClick, symbol, className }) => {
  return (
    <div className={`col-6 ${className}`}>
      <button onClick={onClick} className="button">
        <span>{symbol}</span>
      </button>
    </div>
  )
}

export default Button