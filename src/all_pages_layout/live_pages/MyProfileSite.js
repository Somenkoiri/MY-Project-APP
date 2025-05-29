import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function MyProfileSite() {
  return (
     <>
     <div className='githubProfile'>
         <div className="typing-container">
  <span className="typing-text">(My Profile Site )</span>
</div> <Link to="https://skkoiriprofile.netlify.app/"  className="route-link">❗ Full ⛶ ❗</Link>
         <iframe
        src="https://skkoiriprofile.netlify.app/"
        className="freamGithub"
        title="MyProfileSite"
      />
    </div></>
  )
}

export default MyProfileSite