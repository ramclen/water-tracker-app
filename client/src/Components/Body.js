import React, { useState, useEffect } from 'react'
import EditMaxLevelModal from "./EditMaxLevelModal";
import BodyProgress from './BodyProgress';
import { GoPencil } from "react-icons/go";
import './body.css';

const Body = ({ totalDrink, maxValue, maxValueChange }) => {
  const [open, setOpen] = useState(false);

  const updateMaxValue = value => {
    maxValueChange(parseInt(value))
    setOpen(false);
  }

  const calculateWaterPercentage = () => {
    if (maxValue === 0) {
      return 100;
    }
    return (totalDrink * 100) / maxValue
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
      <div className="col-6 offset-3" style={{ height: "100%" }} >
        <BodyProgress percentage={calculateWaterPercentage()} />
      </div>
      <div className="col-3">
        {maxValue / 1000} L
        <GoPencil className="editButton" onClick={() => setOpen(true)} />
      </div>
    </div >
  )
}

export default Body