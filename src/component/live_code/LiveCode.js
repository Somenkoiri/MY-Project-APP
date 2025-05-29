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
      <p>All Developer Code Work ( Management System ) All Website To Include This Project | Build : React JS | Only For Developers Use.</p>
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
    <div className="box explore">5.
      <img src={projectImg} alt="Explore" />
      <h3>↪MY Profile App↩</h3>
      <p>Build MY Profile App Using Html Css JS Frontend : ( React Js ) ||.</p>
      <a href="/">Start Code🔎→</a>
    </div>
    <hr></hr>
   <hr></hr>
  </div>
</div>

   </>
  )
}

export default LiveCode;