import React from 'react';
import './style.css';
import profile from './profile.jpg'

function NavbarSection() {
  function toggleMenu() {
    document.getElementById('menu').classList.toggle('active');
  }

  return (
    <nav>
      <div className="logo-title">
        <img src={profile} alt="Logo" />
        <h1>SK Code's</h1>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        ⚙️
      </div>

      <ul className="menu" id="menu">
        <li>💡<a href="/">Home</a></li>
        <li>
          🛠️ <a>Project ▼</a>
          <ul className="dropdown">
            <li>🔗<a href="https://github.com/Somenkoiri">GitHub</a></li>
            <li>🔗<a href="https://youtube.com/@somenoyt?si=V8dR5FSi20Y6bgYh">YouTube</a></li>
            <li>💬<a>somenkoiri0701@gmail.com</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarSection;
