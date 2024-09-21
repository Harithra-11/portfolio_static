import { Title } from '@mui/icons-material'
import React from 'react'
import Project from '../Project/Project'
import { Element } from 'react-scroll'
import './ProjectContainer.css'

const ProjectContainer = () => {
    const projects =
        [
            {
                img: "http://images5.fanpop.com/image/photos/28000000/randomised-random-28065165-1024-819.jpg",
                title: "Facebook",
                desc: "Paragraph writing on any topic is not only about expressing your thoughts on the given topic, but it is also about framing ideas about the topic and making it convenient for the readers to follow it.",
                link: "www.google.com",
            },
            {
                img: "http://images5.fanpop.com/image/photos/28000000/randomised-random-28065165-1024-819.jpg",
                title: "Facebook",
                desc: "Paragraph writing on any topic is not only about expressing your thoughts on the given topic, but it is also about framing ideas about the topic and making it convenient for the readers to follow it.",
                link: "www.google.com",
            },
            {
                img: "http://images5.fanpop.com/image/photos/28000000/randomised-random-28065165-1024-819.jpg",
                title: "Facebook",
                desc: "Paragraph writing on any topic is not only about expressing your thoughts on the given topic, but it is also about framing ideas about the topic and making it convenient for the readers to follow it.",
                link: "www.google.com",
            },
            {
                img: "http://images5.fanpop.com/image/photos/28000000/randomised-random-28065165-1024-819.jpg",
                title: "Facebook",
                desc: "Paragraph writing on any topic is not only about expressing your thoughts on the given topic, but it is also about framing ideas about the topic and making it convenient for the readers to follow it.",
                link: "www.google.com",
            },
            {
                img: "http://images5.fanpop.com/image/photos/28000000/randomised-random-28065165-1024-819.jpg",
                title: "Facebook",
                desc: "Paragraph writing on any topic is not only about expressing your thoughts on the given topic, but it is also about framing ideas about the topic and making it convenient for the readers to follow it.",
                link: "www.google.com",
            },
            {
                img: "http://images5.fanpop.com/image/photos/28000000/randomised-random-28065165-1024-819.jpg",
                title: "Facebook",
                desc: "Paragraph writing on any topic is not only about expressing your thoughts on the given topic, but it is also about framing ideas about the topic and making it convenient for the readers to follow it.",
                link: "www.google.com",
            },


        ];
    return (
        <Element className="projectContainer" id="projects">
            <h1>Projects</h1>
            <p>Here are some of my projects</p>
            <div className="projectContainer__projects">
                {
                    projects.map((project, index) => {
                        return (
                            <Project key={index}
                            img={project.img}
                            title={project.title}
                            desc={project.desc}
                            link={project.link}  
                            />                          
                            
                        );

                    })
                }

            </div>
        </Element>
    )
}

export default ProjectContainer
