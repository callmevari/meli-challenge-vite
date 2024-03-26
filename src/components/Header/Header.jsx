import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img srcSet={`/logo.png 1x, /logo@2x.png 2x`} alt="Logo" />
        </Link>
      </div>
      <div className="search-input">
        <input type="text" placeholder="Nunca dejes de buscar" />
        <div className="search-icon">
          <img srcSet={`/search.png 1x, /search@2x.png 2x`} alt="Search" />
        </div>
      </div>
    </header>
  );
};

export default Header;