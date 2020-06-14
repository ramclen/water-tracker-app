import React, { useState, useEffect } from 'react'
import EditMaxLevelModal from "./EditMaxLevelModal";
import BodyProgress from './BodyProgress';



const Body = ({ totalDrink }) => {
  const [open, setOpen] = useState(false);
  const [maxValue, setMaxValue] = useState(3500);

  const updateMaxValue = value => {
    setMaxValue(value)
    setOpen(false);
  }


  useEffect(() => {

  }, [])

  return (
    <div className="row manBody">
      <EditMaxLevelModal
        value={maxValue}
        open={open}
        onClose={() => setOpen(false)}
        onUpdate={updateMaxValue}
      />

      <div className="col-9" style={{ height: "100%" }} >
        <BodyProgress percentage={(totalDrink * 100) / maxValue} />
      </div>
      <div className="col-3">
        {maxValue / 1000} L
        <p onClick={() => setOpen(true)} >Pencil</p>
      </div>
    </div >
  )
}

export default Body