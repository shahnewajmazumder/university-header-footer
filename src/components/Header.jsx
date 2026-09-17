function Header({ universityName, department }) {
  return (
    <header className="header">
      <h1>{universityName}</h1>
      <h2>{department}</h2>

      <nav className="navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#courses">Courses</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;