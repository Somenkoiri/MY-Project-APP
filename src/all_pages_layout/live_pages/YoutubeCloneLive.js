import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function YoutubeCloneLive() {
  return (
    <>
     <div className='githubProfile'>
         <div className="typing-container">
  <span className="typing-text">( YouTube Clone Live )</span>
</div><Link to="https://youtubedemo1.netlify.app/"  className="route-link">❗ Full ⛶ ❗</Link>
         <iframe
        src="https://youtubedemo1.netlify.app/"
        className="freamGithub"
        title="YouTube"
      />
    </div></>
  )
}

export default YoutubeCloneLive