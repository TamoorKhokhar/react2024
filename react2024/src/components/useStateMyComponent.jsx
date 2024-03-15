import React, { useState } from "react";

function UseStateMyComponent() {
  const [name, setName] = useState(false);
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const UpdateName = () => {
    setName(!name);
  };

  const IncrementAge = () => {
    setAge(age + 1);
  };

  const DecrementAge = () => {
    setAge(age > 0 ? age - 1 : 0);
  };

  const ToggleStatus = () => {
    setIsEmployed(!isEmployed);
  };
  return (
    <>
      <div style={{ backgroundColor: "yellow" }}>
        <h2>React Hook</h2>
        <p>Name: {name ? "Tamoor" : "Ali"}</p>
        <button onClick={UpdateName}>Set Name</button>
        <div style={{ padding: "2rem" }}>
          <p>Age :{age}</p>
          <button onClick={IncrementAge}> IncrementAge</button>
          <button onClick={DecrementAge}> DecrementAge</button>
        </div>

        <div style={{ padding: "2rem" }}>
          <p>isEmployed :{isEmployed ? "Yes" : "No"}</p>
          <button onClick={ToggleStatus}> Toggle Status</button>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default UseStateMyComponent;
