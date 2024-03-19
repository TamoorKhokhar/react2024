import React, { useState } from "react";

function UpdateStateOfanObjects() {
  const newYear = new Date().getFullYear();
  const [cars, setCars] = useState([]);
  console.log(cars, "kkk");
  const [year, setYear] = useState(newYear);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleMakeChange = (e) => {
    setMake(e.target.value);
  };
  const handleModelChange = (e) => {
    setModel(e.target.value);
  };

  const handleAddCar = () => {
    const newCar = { year: year, make: make, model: model };
    setCars((c) => [...c, newCar]);
    setYear(newYear);
    setMake("");
    setModel("");
  };
  const handleRemoveData = (index) => {
    setCars((c) => c.filter((_, i) => i !== index));
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
        <h3>
          Update State of an Multiple Objects and add and remove data from an
          Object
        </h3>
        <ul>
          {cars?.map((car, index) => {
            return (
              <li key={index} onClick={() => handleRemoveData(index)}>
                {car.year}
                <hr></hr>
                {car.make}
                <hr></hr>
                {car.model}
                <hr></hr>
              </li>
            );
          })}
        </ul>

        <input type="number" onChange={handleYearChange} value={year} />
        <br></br>
        <input type="text" onChange={handleMakeChange} value={make} />
        <br></br>
        <input type="text" onChange={handleModelChange} value={model} />
        <br></br>
        <button onClick={handleAddCar}>Add Car Data</button>
      </div>
    </>
  );
}

export default UpdateStateOfanObjects;
