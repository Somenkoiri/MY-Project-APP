import React from 'react'
import './style.css'
import projectImg from './project.jpg'

function LiveCode() {
  return (
   <><div className="container">
  <div class="typing-container">
  <span class="typing-text">( Live Project View )</span>
</div>


  <div className="grid">
    <div className="box dev">1.
      <img src={projectImg} alt="Developing" />
      <h3>↪Developer Work↩</h3>
      <p>Learn web and app development from scratch.</p>
      <a href="/developer-code-work-live">Start Live🔎→</a>
    </div>

    <div className="box design">2.
      <img src={projectImg} alt="Designing" />
      <h3>↪YouTube Clone↩</h3>
      <p>How to Build a YouTube Clone Using Html Css || Best YouTube Clone ||.</p>
      <a href="/youtube-clone-live">Start Live🔎→</a>
    </div>

  <div className="box design">3.
      <img src={projectImg} alt="Designing" />
      <h3>↪My Profile Site↩</h3>
      <p>This is my profile web page and build to using || Using Html , CSS , JS , JQUERY , and JS Particles.</p>
      <a href="/my-profile-site">Start Live🔎→</a>
    </div>

    <div className="box ai">4.
      <img src={projectImg} alt="AI and ML" />
      <h3>↪Netflix Clone↩</h3>
      <p>How to Build a Netflix Clone Using Html Css || Best Netflix Clone ||.</p>
      <a href="/netflix-clone-live">Start Live🔎→</a>
    </div>
    <hr></hr>
   <hr></hr>
  </div>
</div>

   </>
  )
}

export default LiveCode;