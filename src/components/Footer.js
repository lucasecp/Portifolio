import React from 'react'
import './assets/css/footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

export default () =>
    <> 
        <footer id='contacts'>
            <ul className='contacts'>
                <li><a href='https://github.com/lucasecp' target='_blank'  rel="noopener noreferrer"><FaGithub className='contact-img'/></a></li>
                <li><a href='https://api.whatsapp.com/send?phone=5521993371281'  rel="noopener noreferrer" target='_blank'><FaWhatsapp className='contact-img'/></a></li>
                <li><a href='https://www.linkedin.com/in/lucas-emerson/'  rel="noopener noreferrer" target='_blank'><FaLinkedin className='contact-img'/></a></li>
            </ul>
            <p>Desenvolvido por Lucas &copy;2020</p>
        </footer>
    </> 