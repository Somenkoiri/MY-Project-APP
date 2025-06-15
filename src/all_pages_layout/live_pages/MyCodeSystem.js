import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

function MyCodeSystem() {
  return (
    <>
     <div className='githubProfile'>
         <div className="typing-container">
  <span className="typing-text">( Developer Code Work )</span>
</div>
 <Link to="https://mycodesystem.netlify.app/"  className="route-link">❗ Full ⛶ ❗</Link>
         <iframe
        src="https://mycodesystem.netlify.app/"
        className="freamGithub"
        title="Developer"
      />

    </div></>
  )
}

export default MyCodeSystem;