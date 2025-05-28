import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

function FooterSection() {
  return (
    <> 
  <div className="bottom-nav">
    <Link to="/" className="nav-item"><div className="nav-item active">🏠<br />Home</div></Link>
    <Link to="/live-code" className="nav-item"><div className="nav-item">🎥<br />Live</div></Link>
    <Link to="/local-code" className="nav-item"><div className="nav-item">💻<br />Code</div></Link>
    <Link className="nav-item"><div className="nav-item" >⚙️<br />Settings</div></Link>
  </div>
    </>
  )
}

export default FooterSection;