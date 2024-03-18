function List({ background, items, category }) {
  const itemList = items;

  const lowCalories = items.filter((item) => item.calories < 100);
  const listItems = lowCalories.map((item) => {
    return (
      <li key={item.name}>
        {item.name}, {item.calories}
      </li>
    );
  });
  const allListData = itemList.map((item) => {
    return (
      <>
        <div key={item.name}>
          <h2>{item.name}</h2>
          <h2>{item.calories}</h2>
        </div>
      </>
    );
  });

  return (
    <>
      <div style={{ backgroundColor: background }}>
        <h2>Renderiing List with Map</h2>
        <h3>{category}</h3>
        <p>
          {listItems}
          {allListData}
        </p>
      </div>
    </>
  );
}

export default List;
