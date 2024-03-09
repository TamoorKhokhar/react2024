function Header() {
  return (
    <div>
      <header>
        <nav>
          <h1>My React Course {new Date().getFullYear()}</h1>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              {" "}
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
          <hr></hr>
        </nav>
      </header>
    </div>
  );
}

export default Header;
