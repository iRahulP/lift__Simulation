import React from 'react'
import { useState } from 'react';
import './Lift.css';

const Lift = (props) => {
    const [currentFloor, setCurrentFloor] = useState('0');

    function moveFloors(e) {
        const currentFloor = e.target.id;
        setCurrentFloor(currentFloor);
    }
    
    return (
      <div className="floorsContainer">
        <div className="floor">
          <div>
            <button
              className="button b1"
              id="4"
              onClick={(e) => moveFloors(e)}
            >
              Down
            </button>
          </div>
          <h3>L4</h3>
        </div>

        <div className="floor">
          <div>
            <button
              className="button b2"
              id="3"
              onClick={(e) => moveFloors(e)}
            >
              Up
            </button>
            <br />
            <button
              className="button b1"
              id="3"
              onClick={(e) => moveFloors(e)}
            >
              Down
            </button>
          </div>
          <h3>L3</h3>
        </div>

        <div className="floor">
          <div>
            <button
              className="button b2"
              id="2"
              onClick={(e) => moveFloors(e)}
            >
              Up
            </button>
            <br />
            <button
              className="button b1"
              id="2"
              onClick={(e) => moveFloors(e)}
            >
              Down
            </button>
          </div>
          <h3>L2</h3>
        </div>

        <div className="floor">
          <div>
            <button
              className="button b2"
              id="1"
              onClick={(e) => moveFloors(e)}
            >
              Up
            </button>
            <br />
            <button
              className="button b1"
              id="1"
              onClick={(e) => moveFloors(e)}
            >
              Down
            </button>
          </div>
          <h3>L1</h3>
        </div>

        <div className="floor">
          <div>
            <button
              className="button b2"
              id="0"
              onClick={(e) => moveFloors(e)}
            >
            Up
            </button>
          </div>
          <h3>B</h3>
      
          <div
            className="lift"
            style={{ transform: `translateY(${-currentFloor * "140"}px)` }}
          >
          </div>
        </div>

      </div>
    )
}

export default Lift;
