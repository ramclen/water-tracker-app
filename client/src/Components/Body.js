import React, { useState, useEffect } from 'react'
import EditMaxLevelModal from "./EditMaxLevelModal";
import BodyProgress from './BodyProgress';



const Body = () => {
  const [open, setOpen] = useState(false);
  const incrementPercentage = (percentage) => `linear-gradient(180deg, #5dc2f0 ${percentage}%, #1b96d3 ${percentage}%)`;

  const [bodyPercentage, setBodyPercentage] = useState({
    fill: incrementPercentage(20)
  });


  useEffect(() => {
    setTimeout(() => {
      console.log('increment!');
      document.getElementById('stop1')
    }, 3000)
  }, [])


  return (
    <div className="row manBody">
      <EditMaxLevelModal open={open} onClose={() => setOpen(false)} />

      <div className="col-9 body-water" >
        <BodyProgress percentage="100" />
      </div>
      <div className="col-3">
        3.5 L
                <p onClick={() => setOpen(true)} >Pencil</p>
      </div>
    </div>
  )
}

export default Body