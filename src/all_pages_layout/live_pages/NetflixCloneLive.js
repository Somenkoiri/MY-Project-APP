import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

function NetflixCloneLive() {
  return (
    <>
     <div className='githubProfile'>
         <div className="typing-container">
  <span className="typing-text">( Netflix Clone Live )</span>
</div> <Link to="https://demowork1.netlify.app/"  className="route-link">❗ Full ⛶ ❗</Link>
         <iframe
        src="https://demowork1.netlify.app/"
        className="freamGithub"
        title="Netflix"
      />
    </div></>
  )
}

export default NetflixCloneLive;