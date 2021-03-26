import React from 'react'
import {useTheme} from '../context/Theme'

export default () => {
    const {theme} = useTheme();

    return (<>
        <main className={theme === 'dark'? 'darkMain': ''}  >
            <section id='projects' className='projects'>
                <h2 >Projetos em Destaque</h2>
                  <div className='cardContainer full-stack' >
                <div className='cardHeader'>
                    <h5>Full Stack</h5>
                     <h3>Dashboard</h3>
                 </div>
                    <div className='cardInfo'><h4>Vue Js & NodeJs</h4> <p>Painel Administrativo</p> </div>
                    <div className='cardButton'> <a href='https://dashboard-loja.netlify.app/' rel="noopener noreferrer" target='_blank'>Acessar</a></div>
                </div>
                <div className='cardContainer'>
                    <div className='cardHeader'>
                        <h5>Front end</h5>
                         <h3>World Trip</h3> 
                    </div>
                    <div className='cardInfo'> <h4>html, css/Bootstrap & javascript/Jquery</h4><p>Agência de intercâmbio.</p></div>
                    <div className='cardButton'> <a href='https://lucasecp.github.io/world-trip/' rel="noopener noreferrer" target='_blank'>Acessar</a></div>
                </div>
                <div className='cardContainer' >
                <div className='cardHeader'>
                    <h5>Front end</h5>
                     <h3>Hobbies</h3>
                 </div>
                    <div className='cardInfo'><h4>html, css & javascript</h4> <p>Website sobre meus hobbies.</p> </div>
                    <div className='cardButton'> <a href='https://lucasecp.github.io/hobbies/' rel="noopener noreferrer" target='_blank'>Acessar</a></div>
                </div>
               
                
            </section>
        </main>
    </>)
}