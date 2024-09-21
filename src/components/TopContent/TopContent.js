import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'

const TopContent = () => {
  return (
    <div className="topContent">
        <div className="topContent__container">
            <h1>
                Harithra R 
            </h1>
            <p>Seeking a beginner role to enhance and explore my technical knowledge.I consider myself as a responsible and hardworking individual.I’m knowledgeable about programming and web designing. I’m eager to learn new technologies and approaches.Strong teamwork,Interpersonal and communication skills.I’m looking forward for my first work experience.</p>
            <a href="www.google.com">
                <button className="topContent__downloadButton">Download CV</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
                <button className="topContent__workButton">My work</button>
            </Link>
        </div>
      
    </div>
  )
}

export default TopContent
