import React from 'react';
import './Slider.scss';

function Slider(props) {
  return (
    <div>
      <input
        type="range"
        class="form-range"
        min="0"
        max="5"
        step="0.5"
        id="customRange3"
      />
      <p>NT$0 ~ 190,000</p>
    </div>
  );
}

export default Slider;
