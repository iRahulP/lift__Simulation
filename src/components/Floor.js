import React from 'react'
import { useState } from 'react';

const Floor = (props) => {
  const [currentFloor, setCurrentFloor] = useState(null);
  
  function moveFloors(e) {
    const currentBtn = e.target.id;    
    setCurrentFloor(currentBtn);
  }

  return (
        <div className={`floor${props.level} floors`}>
            <div className={`buttonsDiv`}>
              <button
                className="bttn"
                id={`${props.level}`}
                onClick={(e) => moveFloors(e)}
              >
                UP
              </button>
              
              <br />
              
              <button
                className="bttn"
                id={`${props.level}`}
                onClick={(e) => moveFloors(e)}
              >
                Down
              </button>
            </div>
            <h3>floor{`${props.level}`}</h3>
        </div>
    )
}

export default Floor
