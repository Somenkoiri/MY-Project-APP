import React from 'react'
import './style.css'

function LiveCode() {
  return (
   <><div className="container">
  <div class="typing-container">
  <span class="typing-text">( Live Project View )</span>
</div>


  <div className="grid">
    <div className="box dev">
      <img src="https://via.placeholder.com/100" alt="Developing" />
      <h3>Developer Work</h3>
      <p>Learn web and app development from scratch.</p>
      <a href="https://developercodework.netlify.app/">Start Live →</a>
    </div>

    <div className="box design">
      <img src="https://via.placeholder.com/100" alt="Designing" />
      <h3>YouTube Clone</h3>
      <p>Master UI/UX, graphic, and web design.</p>
      <a href="https://youtubedemo1.netlify.app/">Start Live →</a>
    </div>

    <div className="box ai">
      <img src="https://via.placeholder.com/100" alt="AI and ML" />
      <h3>Netflix Clone </h3>
      <p>Explore artificial intelligence and machine learning.</p>
      <a href="https://demowork1.netlify.app/">Start Live →</a>
    </div>
  </div>
</div>

   </>
  )
}

export default LiveCode;