import React, { useState, useEffect } from 'react'
import EditMaxLevelModal from "./EditMaxLevelModal";
import BodyProgress from './BodyProgress';
import { GoPencil } from "react-icons/go";
import { Col, Row } from 'react-bootstrap';
import './body.css';
let previousTotalDrink;

/**
 * it renders the body section and the modal to edit the maximum value
 * @param  {number} totalDrink
 * @param  {number} targetValue
 * @param  {function} targetValueChange
 */
const Body = ({ totalDrink, targetValue, targetValueChange }) => {
  const [open, setOpen] = useState(false);
  const [percentage, setPercentage] = useState(totalDrink);

  const percentageIncreaseAnimation = () => {
    // Increment is dependant on the target value to keep speed if targetValue change
    previousTotalDrink += Math.floor(25000 / targetValue);

    if (totalDrink > previousTotalDrink) {
      setPercentage(calculateWaterPercentage(previousTotalDrink))
      requestAnimationFrame(percentageIncreaseAnimation);
    } else {
      previousTotalDrink = totalDrink
    }
  }

  const percentageDecreaseAnimation = () => {
    // Decrease is dependant on the target value to keep speed if targetValue change
    previousTotalDrink -= Math.floor(25000 / targetValue);

    if (totalDrink <= previousTotalDrink) {
      setPercentage(calculateWaterPercentage(previousTotalDrink))
      requestAnimationFrame(percentageDecreaseAnimation);
    } else {
      previousTotalDrink = totalDrink
    }
  }

  useEffect(() => {
    // initialize previous previous total drink
    previousTotalDrink = totalDrink;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // Increasing percentage gradually to show an animation
    if (totalDrink > previousTotalDrink) {
      percentageIncreaseAnimation();
    } else {
      percentageDecreaseAnimation()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalDrink])

  const updateTargetValue = value => {
    targetValueChange(parseInt(value))
    // setting the percentage to update the body progress component
    setPercentage((totalDrink * 100) / value);
    setOpen(false);
  }

  /**
   * it returns the percentage of value passed by params to the target water level
   * @param  {number} value
   */
  const calculateWaterPercentage = (value) => {
    if (targetValue === 0) {
      return 100;
    }
    return (value * 100) / targetValue
  }

  /**
   * it renders the modal to edit target level. if 'open' value is true returns the modal or else it returns null 
   */
  const renderModal = () => {
    if (open) {
      return (
        <EditMaxLevelModal
          value={targetValue}
          open={open}
          onClose={() => setOpen(false)}
          onUpdate={updateTargetValue}
        />
      )
    }
    return null;
  }

  return (
    <Row className="manBody">
      {renderModal()}
      <Col xs={{ span: 6, offset: 3 }} className="body-box" >
        <BodyProgress percentage={percentage} />
      </Col>
      <Col xs={3} className="max-value-text">
        {targetValue / 1000} L
        <GoPencil className="editButton" onClick={() => setOpen(true)} />
      </Col>
    </Row>
  )
}

export default Body