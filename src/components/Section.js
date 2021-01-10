import React from 'react'
import {useTheme} from '../context/Theme'
export default () =>{
    const {theme} = useTheme()
    return(
        <>
        <section className={theme === 'dark'? 'darkAbout about': 'about'} id='about'>
        <div className='section-container'>
        <h2>Sobre mim</h2>
        <p>Sou Front end developer, graduado em análise e desenvolvimento de sistemas,
            escolhi a área de web e iniciei meus estudos há 1 ano, desde então evolui bastante.
            Pretendo me aperfeiçoar até chegar ao nível full-stack.
        </p>
        </div>
        </section>       
        </>
    )        
    }