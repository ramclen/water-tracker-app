import React, { useState } from 'react'
import Swipe from './Swipe'
import Button from './Button'

const IncrementButtons = ({ onClick }) => {
  const [amount, setAmount] = useState(150);

  return (
    <div className="col-12">
      <Swipe onChange={(value) => setAmount(value)} />
      <div className="row">
        <Button onClick={() => onClick(amount)} className="right" symbol="+" />
        <Button onClick={() => onClick(-amount)} symbol="-" />
      </div>
    </div>
  )
}

export default IncrementButtons