import React,{useState} from 'react'
import {useTheme} from '../context/Theme'
import img from  '../assets/img/Lucas.svg'

export default () =>{
    const {theme} = useTheme();
    const [activeCurriculum, setActive] = useState(false)
       const handleClose = (e) =>{ 
           if(e.currentTarget === e.target) setActive(false) 
           console.log(e.currentTarget, e.target)
           }
           const handleActive = ()=> setActive(true)
    return(
        <>
        <section className={theme === 'dark'? 'darkAbout about': 'about'} id='about'>
        <div className='section-container'>
        <h2>Sobre mim</h2>
        <p>Graduado em Análise e desenvolvimento de sistemas, escolhi a área de web e iniciei meus estudos há 2 anos, desde então evolui bastante.
            Apesar de gostar do back-end, meu foco atualmente é no front-end
        </p>
                 <div className={activeCurriculum ? 'active-curriculum curriculum' : 'curriculum'} onClick={handleClose}>
                 <div className='curriculum-container'>
                  <button onClick={handleClose}>x</button>
                   <img src={img} alt='currículo'/>
                 </div>
             </div>
                <button onClick={handleActive} className='outline-btn'>currículo</button>
        </div>
        </section>       
        </>
    )        
    }