import React,{useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
export default ()=> {
    useEffect(()=>{
        const list = document.querySelector('.list')
        const div = document.querySelector('.listBg')

        window.addEventListener('click',(e)=>{
            const el = e.target
            if(!list.classList.contains('active')) {
                return
            }
            if(el === div ){
                list.classList.remove('active')
            }

        })
    },[])
      function handleClick (){
        const element = document.querySelector('.list')
        element.classList.toggle('active')
    }
 

    return(
        <>
           
           <nav >
              
               <ul> 
               <h1> <a href='/'>Lucas</a> </h1>
                   <div className='list'>
                   <li><a href='#about'>Sobre</a></li>
                   <li><a href='#skills'>Conhecimentos</a></li>
                   <li><a href='#projects'>Projetos</a></li>
                   <li><a href='#contacts'>Contato</a></li>

                   <div className='listNetworks'>
                   <li><a href='https://github.com/lucasecp' target='_blank'  rel="noopener noreferrer"><FaGithub className='contact-img'/></a></li>
                   <li><a href='https://api.whatsapp.com/send?phone=5521993371281'  rel="noopener noreferrer" target='_blank'><FaWhatsapp className='contact-img'/></a></li>
                   <li><a href='https://www.linkedin.com/in/lucas-emerson/'  rel="noopener noreferrer" target='_blank'><FaLinkedin className='contact-img'/></a></li>
                   </div>
                   <div className='listBg'>
                   

                   </div>
                 
                   </div>
                   
                   <FaBars onClick={handleClick} className='hamburger'/>  
               </ul>
           
            </nav> 
           
            <header>
                <div> 
                
                
                  </div>
           </header>
        
     </>
    )
    }