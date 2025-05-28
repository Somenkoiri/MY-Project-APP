import React from 'react'
import './style.css'

function MyProfileSite() {
  return (
     <>
     <div className='githubProfile'>
         <div className="typing-container">
  <span className="typing-text">(My Profile Site )</span>
</div>
         <iframe
        src="https://skkoiriprofile.netlify.app/"
        className="freamGithub"
        title="MyProfileSite"
      />
    </div></>
  )
}

export default MyProfileSite