import React from 'react'
import { Element } from 'react-scroll'
import skillimg2 from '../../assets/skillimg2.jpeg'
import LinearProgress from '@mui/material/LinearProgress'
import './SkillContainer.css'
const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
        <div className="skillContainer__image">
            <img src={skillimg2} alt="" />
        </div>
        <div className="skillContainer__text">
            <h2>SKILLSET</h2>
            <div className="skillContainer__skillSet">
                <h5>React</h5>
                <div className="skillContainer__slider skillContainer__slider1">
                    <LinearProgress variant="determinate" value={60} />
                </div>
            </div>
            <div className="skillContainer__skillSet">
                <h5>Java</h5>
                <div className="skillContainer__slider skillContainer__slider2">
                    <LinearProgress variant="determinate" value={70} />
                </div>
            </div>
            <div className="skillContainer__skillSet">
                <h5>C</h5>
                <div className="skillContainer__slider skillContainer__slider3">
                    <LinearProgress variant="determinate" value={80} />
                </div>
            </div>
            <div className="skillContainer__skillSet">
                <h5>C++</h5>
                <div className="skillContainer__slider skillContainer__slider4">
                    <LinearProgress variant="determinate" value={70} />
                </div>
            </div>
            <div className="skillContainer__skillSet">
                <h5>JavaScript</h5>
                <div className="skillContainer__slider skillContainer__slider5">
                    <LinearProgress variant="determinate" value={75} />
                </div>
            </div>

        </div>
    </Element>
  )
}

export default SkillContainer
