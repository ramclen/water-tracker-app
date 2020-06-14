import React from 'react'

const TotalWater = ({ total }) => {
  return (
    <div className="col-6">
      <h1>{total / 1000} L</h1>
      <p className="subText">Total water drunk</p>
    </div>
  )
}

export default TotalWater