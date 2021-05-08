import React from 'react';
import './HeaderCSS.css';

function Header() {
  return (
    <div>
      <header>
        <nav
          id="navBar"
          className="navbar navbar-expand-lg navbar-dark bg-dark"
        >
          <a
            className="navbar-brand"
            id="homeLink"
            href="https://mtbishop.github.io/Employee-Directory/"
          >
            Employee Directory
          </a>
          <a
            className="navbar-brand"
            id="repLink"
            href="https://github.com/mtbishop/Employee-Directory"
          >
            Repository
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
