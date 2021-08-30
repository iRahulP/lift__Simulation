import React from 'react'
import { useState } from 'react';
import Floor from './Floor';
import './Lift.css';

const Lift = () => {
    return (
      <div>
        <section className="floorSection">
          <Floor
            level='4'
            moveFloors
          />
          <Floor 
            level='3'
            moveFloors
          />
          <Floor 
            level='2'
            moveFloors
          />
          <Floor 
            level='1'
            moveFloors
          />
        </section>
      </div>
    )
}

export default Lift;
