import React from 'react'

const Button = ({ onClick, symbol, className }) => {
  return (
    <div className={`col-6 ${className}`}>
      <button onClick={onClick} className="button">{symbol}</button>
    </div>
  )
}

export default Button