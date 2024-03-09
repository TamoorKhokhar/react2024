function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();

  return (
    <footer>
      <p>
        &copy; React.......{year}/{month}/{date}.......course
      </p>
    </footer>
  );
}

export default Footer;
