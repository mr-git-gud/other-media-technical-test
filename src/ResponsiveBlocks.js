import React from 'react';
import './responsive-blocks.css';
import city from './city.jpg';
import drinks from './drinks.jpg';
import food from './food.jpg';

class ResponsiveBlocks extends React.Component {
  render(){
    return(
      <div class="grid-container">
        <div class="block1">
          <img src={city} alt="city" style={{width: "100%", height: "100%"}}/>
        </div>
        <div class="block2">
          <img src={drinks} alt="drinks" style={{width: "100%", height: "100%"}}/>
        </div>
        <div class="block3">
          <img src={food} alt="food" style={{width: "100%", height: "100%"}}/>
        </div>
      </div>
    )
  }
}

export default ResponsiveBlocks;
