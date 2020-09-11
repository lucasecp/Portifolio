import React from 'react'
import {useTheme} from '../context/Theme'
export default () =>{
    const {theme} = useTheme()
    return(
        <>
        <section className={theme === 'dark'? 'darkAbout about': 'about'} id='about'>
        <h2>Sobre mim</h2>
        <p>Sou carioca, tenho 22 anos, estou em busca de uma vaga como desenvolvedor front-end,
            Iniciei meus estudos na área de desenvolvimento web há 1 ano e desde então evolui bastante.
            Estou gostando muito da área e pretendo me aperfeiçoar até chegar ao nível full-stack.
        </p>
        </section>       
        </>
    )        
    }