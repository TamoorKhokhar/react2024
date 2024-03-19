import React, { useState } from "react";

function UpdateStateOfAnArray() {
  const [fruits, setFruits] = useState([
    "apple",
    "orange",
    "banana",
    "grapes",
    "mango",
  ]);

  const AddFruit = () => {
    const newFruit = document.getElementById("fruitInput").value;
    document.getElementById("fruitInput").value = "";

    setFruits((f) => [...f, newFruit]);
  };
  const RemoveFruits = (index) => {
    setFruits(fruits.filter((_, i) => i !== index));
  };
  return (
    <>
      <div
        style={{
          color: "white",
          padding: "2rem",
          backgroundColor: "#574250",
          marginTop: "1rem",
        }}
      >
        <h3>Update State of anArray and add and remove data from an array</h3>
        <ul>
          {fruits.map((fruit, index) => {
            return (
              <li key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "1rem",
                  }}
                >
                  {fruit}
                  <br></br>
                  <button onClick={() => RemoveFruits(index)}>
                    Remove {fruit}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <input type="text" placeholder="Enter FRuit Name" id="fruitInput" />
        <button onClick={AddFruit}>Add Food</button>
      </div>
    </>
  );
}

export default UpdateStateOfAnArray;
