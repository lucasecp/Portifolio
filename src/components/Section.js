import React,{useState} from 'react'
import {useTheme} from '../context/Theme'
import img from  '../assets/img/Lucas.svg'
import {FaRegListAlt} from 'react-icons/fa';

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
        <div className='section-container container-xl'>
        <h2>Sobre mim</h2>
        <p>Me chamo Lucas, sou graduado em Análise e desenvolvimento de sistemas. Atuo como desenvolvedor front end construindo layouts para sites responsivos
            usando HTML, CSS e Javascript. 
        </p>
        <p>
            Tenho conhecimentos práticos e teóricos nos frameworks ReactJs e VueJs, criando projetos pessoais, os principais estão listados aqui <a href="#projects">abaixo</a>.
            Além do front também criei uma api em NodeJs usando a ORM sequelize com o banco de dados postgres.
        </p>
        
                 <div className={activeCurriculum ? 'active-curriculum curriculum' : 'curriculum'} onClick={handleClose}>
                 <div className='curriculum-container'>
                  <button onClick={handleClose}>x</button>
                   <img src={img} alt='currículo'/>
                 </div>
             </div>
                <button onClick={handleActive} className='outline-btn'> <FaRegListAlt className='mr-1'/>currículo</button>
        </div>
        </section>       
        </>
    )        
    }