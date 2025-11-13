import React from 'react'
import '../styles/About.css'
import Project from '../components/Project'
import Skill from '../components/Skill'
import Timeline from '../components/timeline/Timeline'
import CertificateSection from '../components/certification/CertificateSection'

const About:React.FC = ():JSX.Element => {
  return (
    <div className='about-container'>

      <h1 className='about-header'>My Projects</h1>
      <Project/>

      <h1 className='about-header'>Skills</h1>
      <Skill/>

      <Timeline />

      <CertificateSection/>

    </div>
  )
}

export default About
