function Students({ background, name, age, isStudent }) {
  return (
    <>
      <div style={{ backgroundColor: background }}>
        <h3>Student Data</h3>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Student: {isStudent ? "Yes" : "No"}</p>
      </div>
      <hr></hr>
    </>
  );
}

export default Students;
