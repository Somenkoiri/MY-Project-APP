import React from 'react'
import './style.css'
import InfoSkoiri from '../info_sk/InfoSkoiri';
import SkillsData from '../info_sk/SkillsData';


function ProjectBox() {
  return (
    <>
    <div className='projectMainBox'>
      <InfoSkoiri />
      <SkillsData />
    </div>
    </>

  )
}

export default ProjectBox;