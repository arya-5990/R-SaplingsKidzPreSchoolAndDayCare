export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        🌈 Bright Futures
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#journey">Journey</a></li>
        <li><a href="#learning">Learning</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      <button className="nav-btn">
        Book a Tour
      </button>
    </nav>
  );
}