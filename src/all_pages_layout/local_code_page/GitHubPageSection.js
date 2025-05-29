import React from 'react';
import './style.css';

function GitHubPageSection() {
  return (
     <>
     <div className='githubProfile'>
         <div className="typing-container">
  <span className="typing-text">( My GitHub Profile )</span>
</div>
         <iframe
        src="https://github.com/somenkoiri"
        className="freamGithub"
        title="GitHub"
      />
    </div></>
  ) 
}

export default GitHubPageSection; 