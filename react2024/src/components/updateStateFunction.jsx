import { useState } from "react";

function UpdateStateFunction() {
  //   Updater Function : a function passed as an argument to setState() allow for the safe update based on previous state not on the current state

  const [carData, setCarData] = useState({
    year: 2023,
    make: "Toyota",
    model: "Grande",
  });

  const [count, setCount] = useState(0);

  const hnandleYearChange = (e) => {
    setCarData((c) => ({ ...c, year: e.target.value }));
  };
  const handleMakeChange = (e) => {
    setCarData((c) => ({ ...c, make: e.target.value }));
  };
  const handleModelChange = (e) => {
    setCarData((c) => ({ ...c, model: e.target.value }));
  };

  const IncrementAge = () => {
    setCount((a) => a + 1);
    setCount((a) => a + 1);
  };

  const DecrementAge = () => {
    setCount(count > 0 ? (a) => a - 1 : 0);
    setCount(count > 0 ? (a) => a - 1 : 0);
  };
  const Reset = () => {
    setCount(0);
  };
  return (
    <>
      <div style={{ backgroundColor: "#874a75", color: "white" }}>
        <h3>Update state based on previous state using updater Function </h3>

        <div>
          <p>
            Your Favorite car is {carData.year} {""}
            {carData.make} {carData.model}
          </p>
          <input
            type="number"
            value={carData.year}
            onChange={hnandleYearChange}
          />
          <br></br>
          <input type="text" value={carData.make} onChange={handleMakeChange} />
          <br></br>
          <input
            type="text"
            value={carData.model}
            onChange={handleModelChange}
          />
        </div>

        <div>
          <div style={{ padding: "2rem" }}>
            <p>Age :{count}</p>
            <button onClick={IncrementAge}> IncrementAge</button>
            <button onClick={Reset}> Reset</button>
            <button onClick={DecrementAge}> DecrementAge</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateStateFunction;
