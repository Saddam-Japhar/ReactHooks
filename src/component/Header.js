import Link from './Link'
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" href="/">
              Accordion
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/list">
              list
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/dropdown">
              dropdown
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/translate">
              translate
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;