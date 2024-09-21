 import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
 import { Element } from 'react-scroll'
 import './Contact.css'
 const Contact = () => {
   return (
     <Element className="contact" id="contact">
        <h1>Contact</h1>
        <div className="contact__container">
            <p>
                Email: <span> harithrar11@gmail.com</span>
            </p>
            <p>
                Github UserName: <span>Harithra11</span>
            </p>
            <div className="contact__icons">
                <a herf="google.com">
                    <IconButton>
                        <LinkedIn />

                    </IconButton>
                </a>
                <a herf="google.com">
                    <IconButton>
                        <Instagram />

                    </IconButton>
                </a>
                <a herf="google.com">
                    <IconButton>
                        <Facebook />

                    </IconButton>
                </a>

            </div>
        </div>

     </Element>
   )
 }
 
 export default Contact
 