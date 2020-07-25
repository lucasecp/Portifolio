import React from 'react'
import './assets/css/header.css'
import {FaBars} from 'react-icons/fa'


export default ()=> {
      function handleClick (){
        const element = document.querySelector('.list')
        element.classList.toggle('active')
    }
 

    return(
        <>
           
           <nav >
               <ul> 
               <h1> <a href='/'> </a></h1>
                   <div className='list'>
                   <li><a href='#about'>Sobre</a></li>
                   <li><a href='#skills'>Conhecimentos</a></li>
                   <li><a href='#projects'>Projetos</a></li>
                   <li><a href='#contacts'>Contato</a></li>
                   </div>
                   <FaBars onClick={handleClick} className='hamburger'/>  
               </ul>
            </nav> 
     
            <header>
                <div> 
                    <p>Em <span>const</span>ante aprendizado</p>
                    <span>Photo by <a href="https://unsplash.com/@maxcodes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener noreferrer" target='_blank' >Maxwell Nelson</a> on <a href="https://unsplash.com/@maxcodes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener noreferrer" target='_blank'>Unsplash</a></span>          
                  </div>
           </header>
     </>
    )
    }