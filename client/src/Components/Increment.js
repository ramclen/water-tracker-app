import React from 'react'
import Swipe from './Swipe'
import Button from './Button'

const Increment = () => {
    return(
        <div className="col-12">
            <Swipe/>
            <div className="row">
                <Button class="right" symbol="+"/>
                <Button symbol="-"/>
            </div>
        </div>
    )
}

export default Increment