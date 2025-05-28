import React from 'react'
import './style.css'
import projectImg from './project.jpg'

function LocalCode() {
  return (
   <>
   <div className="container">
  <div class="typing-container">
  <span class="typing-text">(GitHub Project Code's )</span>
</div>

  <div className="grid">
    <div className="box dev">1.
      <img src={projectImg} alt="Developing" />
      <h3>↪Developer Work↩</h3>
      <p>Learn web and app development from scratch.</p>
      <a href="/developer-code-work-local">Start Code🔎→</a>
    </div>

    <div className="box design">2.
      <img src={projectImg} alt="Designing" />
      <h3>↪MainCare HMS(PHP)↩</h3>
      <p>MainCare ( HMS ) || Create Website in Html , CSS , JS , Backend ( PHP , MYSQL ) , JQUERY.</p>
      <a href="/main-care-local">Start Code🔎→</a>
    </div>

    <div className="box ai">3.
      <img src={projectImg} alt="AI and ML" />
      <h3>↪Car Booking Website↩</h3>
      <p>How to Build a Car Booking Website Using Html , CSS , JS , PHP , MYSQL , JQUERY.</p>
      <a href="/car-booking-website">Start Code🔎→</a>
    </div>

    <div className="box explore">4.
      <img src={projectImg} alt="Explore" />
      <h3>↪Hospital HMS(Java)↩</h3>
      <p>Hospital Management System Using Java ( core , JDBC , Swing GUI ) and Database( MYSQL) In Code Editor ( Netbeans ).</p>
      <a href="/hospital-java-local">Start Code🔎→</a>
    </div>
     <div className="box explore">5.
      <img src={projectImg} alt="Explore" />
      <h3>↪Netflix Clone↩</h3>
      <p>How to Build a Netflix Clone Using Html Css || Best Netflix Clone ||.</p>
      <a href="/netflix-clone">Start Code🔎→</a>
    </div>
     <div className="box explore">6.
      <img src={projectImg} alt="Explore" />
      <h3>↪YouTube Clone↩</h3>
      <p>How to Build a YouTube Clone Using Html Css || Best YouTube Clone ||.</p>
      <a href="/youtube-clone-code">Start Code🔎→</a>
    </div>
     <hr></hr>
   <hr></hr>
  </div>
</div>

   </>
  )
}

export default LocalCode;