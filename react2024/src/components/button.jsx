import { useState } from "react";

const cricketTeam = [
  { name: "Ali", calories: 22 },
  { name: "tamooer", calories: 55 },
  { name: "ali ss", calories: 100 },
  { name: "hammad", calories: 110 },
  { name: "shaoor", calories: 120 },
];
function Button() {
  const [showTeamData, setShowTeamData] = useState(false);

  // OR

  const handleClick = () => {
    setShowTeamData(!showTeamData);
  };
  // OR
  const handleClick2 = (name) => {
    alert(`${name} stop clcik me`);
  };
  // OR
  let count = 0;
  const handleClick3 = (name) => {
    if (count < 3) {
      count++;
      alert(`${name} you click me ${count} times`);
    } else {
      alert("Bro stop clicking me i will fight with you");
    }
  };
  return (
    <>
      {/* <div
        style={{
          backgroundColor: "powderblue",
          padding: "2rem",
        }}
      >
        <h3>Click Events</h3>
        <button style={{ backgroundColor: "ButtonFace" }} onClick={handleClick}>
          Click Me Button Event
        </button>
  
      </div> */}

      {/* or hide and show array of object with clcik event */}

      <div
        style={{
          backgroundColor: "powderblue",
          padding: "2rem",
        }}
      >
        <h3>Click Events</h3>
        <button
          style={{ backgroundColor: "ButtonFace" }}
          onClick={() => handleClick2("Bro")}
        >
          Bro Click Me
        </button>
        <hr></hr>
        {/* OR */}
        <button style={{ backgroundColor: "ButtonFace" }} onClick={handleClick}>
          {showTeamData
            ? "Hide Me to hide cricketTeam List"
            : "Click Me to get cricketTeam List"}
          x
        </button>
        {showTeamData ? (
          <div>
            <ul>
              {cricketTeam.map((team) => {
                return (
                  <li key={team.name}>
                    <p>
                      {team.name},{team.calories}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          ""
        )}
        {/* {showTeamData && (
          <div>
            <ul>
              {cricketTeam.map((team) => {
                return (
                  <li key={team.name}>
                    <p>
                      {team.name},{team.calories}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        )} */}
        <hr></hr>
        {/* OR */}
        <button
          style={{ backgroundColor: "ButtonFace" }}
          onClick={() => handleClick3("Bro")}
        >
          Click Me Count Example
        </button>
        <hr></hr>
      </div>
    </>
  );
}

export default Button;
