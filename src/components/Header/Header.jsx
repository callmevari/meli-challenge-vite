import { useState } from 'react';
import { Link, createSearchParams, useNavigate } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const navigate = useNavigate();
  const [state, setState] = useState('');
  const searchInputHandler = (e) => setState(e.target.value);
  const searchHandler = () => {
    if (state) {
      navigate({
        pathname: 'items',
        search: `?${createSearchParams({
            search: state
        })}`
      });
    } else {
      alert('Debes escribir algo en la caja de búsqueda!');
    }
  }

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img srcSet={`/logo.png 1x, /logo@2x.png 2x`} alt="Logo" />
        </Link>
      </div>
      <div className="search-input">
        <input type="text" onChange={searchInputHandler} placeholder="Nunca dejes de buscar" />
        <div className="search-icon" onClick={searchHandler}>
          <img srcSet={`/search.png 1x, /search@2x.png 2x`} alt="Search" />
        </div>
      </div>
    </header>
  );
};

export default Header;