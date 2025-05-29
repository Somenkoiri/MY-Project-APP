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
          🛠️ <a>Details ▼</a>
          <ul className="dropdown">
            <li>🔗<a href="https://github.com/somenkoiri">GitHub</a></li>
            <li>🔗<a href="https://youtube.com/@somenoyt?si=Mke7mIW22tfj973H">YouTube</a></li>
            <li>💬<a>somenkoiri0701@gmail.com</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarSection;
