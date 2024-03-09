function Home({ question, answer, background }) {
  return (
    <>
      <div style={{ backgroundColor: background }}>
        <h2>Props</h2>
        <h3>{question}</h3>
        <p>{answer}</p>
      </div>
      <hr></hr>
    </>
  );
}

export default Home;
