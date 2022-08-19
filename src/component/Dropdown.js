import React, { useState, useRef } from "react";

const Dropdown = ({ colors }) => {

  const [inputColor, setInputColor] = useState('Color')
  const handleClick= (index)=>{
      setInputColor(colors[index])
  }
  const renderItem = colors.map((color, index)=>{
  return (   
  <a class="dropdown-item" onClick={()=>handleClick(index)}>{color}</a>
  )
})
  return (
      <div>
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {inputColor}
        </button>
        <div class="dropdown-menu">
            {renderItem}
          <div class="dropdown-divider"></div>
        </div>
      </div>
  <h1 style={{color:`${inputColor}`}}>This is {inputColor}</h1>
  </div>
  );
};

export default Dropdown;
