import React from 'react'

const Button = (props) => {
  return (
    <div className={`col-6 ${props.class}`}>
      <button className="button">{props.symbol}</button>
    </div>
  )
}

export default Button