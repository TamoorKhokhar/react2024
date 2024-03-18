import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#ccc2c9");
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <>
      <div style={{ backgroundColor: color, padding: "1rem", color: "white" }}>
        <h1>Color Picker App</h1>
        <div>
          <h3>Selected Color:</h3>
          <p>{color}</p>
        </div>

        <div>
          <input type="color" value={color} onChange={handleColorChange} />
        </div>
      </div>
    </>
  );
}

export default ColorPicker;
