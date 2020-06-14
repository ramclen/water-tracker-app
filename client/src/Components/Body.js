import React, { useState, useEffect } from 'react'
import EditMaxLevelModal from "./EditMaxLevelModal";
import BodyProgress from './BodyProgress';
import { GoPencil } from "react-icons/go";
import './body.css';
let previousTotalDrink;

const Body = ({ totalDrink, maxValue, maxValueChange }) => {
  const [open, setOpen] = useState(false);
  const [percentage, setPercentage] = useState(totalDrink);

  useEffect(() => {
    // initialize previous previous total drink 
    previousTotalDrink = totalDrink;
  }, [])

  useEffect(() => {
    // Increasing percentage gradually to show an animation
    percentageIncreaseAnimation();
  }, [totalDrink])

  const updateMaxValue = value => {
    maxValueChange(parseInt(value))
    setOpen(false);
  }

  const percentageIncreaseAnimation = () => {
    // Increment is dependant on the max value to keep speed if maxValue change
    previousTotalDrink += (25000 / maxValue);
    setPercentage(calculateWaterPercentage(previousTotalDrink))

    if (totalDrink > previousTotalDrink) {
      requestAnimationFrame(percentageIncreaseAnimation);
    } else {
      previousTotalDrink = totalDrink
    }
  }

  const calculateWaterPercentage = (value) => {
    if (maxValue === 0) {
      return 100;
    }
    return (value * 100) / maxValue
  }

  const renderModal = () => {
    if (open) {
      return (
        <EditMaxLevelModal
          value={maxValue}
          open={open}
          onClose={() => setOpen(false)}
          onUpdate={updateMaxValue}
        />
      )
    }
    return null;
  }

  return (
    <div className="row manBody">
      {renderModal()}
      <div className="col-6 offset-3 body-box" >
        <BodyProgress percentage={percentage} />
      </div>
      <div className="col-3">
        {maxValue / 1000} L
        <GoPencil className="editButton" onClick={() => setOpen(true)} />
      </div>
    </div >
  )
}

export default Body