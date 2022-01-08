import React from 'react'
import { useTheme } from '../context/Theme'
import {FaGithub } from 'react-icons/fa'
import {FaArrowRight} from 'react-icons/fa'

export default () => {
    const { theme } = useTheme();

    return (<>
        <main className={theme === 'dark' ? 'darkMain' : ''}  >
            <section id='projects' className='projects container-xl'>
                <h2 >Projetos em Destaque</h2>
                <div className='projects-content row '>
                <div className=' col-md-6 col-lg-4 mt-4 mt-md-0'>
                        <div className='card-content'>
                            <a href="https://marvelcharacterslucas.netlify.app/" rel="noopener noreferrer" target='_blank'>
                        <div className='cardHeader'>
                           
                            <h5>Front end</h5>
                           
                        </div>
                        <div className='cardInfo'> <h4>React, Context api, Typescript e Styled-Components </h4><p>Personagens da Marvel</p></div>
                            </a>
                        <div className='card-button'>
                         <a href='https://github.com/lucasecp/marvel-characters' rel="noopener noreferrer" target='_blank'><FaGithub />github</a>
                         <a href='https://marvelcharacterslucas.netlify.app/' rel="noopener noreferrer" target='_blank'><FaArrowRight/>Acessar</a>
                        </div>
                        </div>
                    </div>
                    <div className=' col-md-6 full-stack col-lg-4 mt-4 mt-md-0' >
                        <div className='card-content'>
                        <a href="https://dashboard-loja.netlify.app/" rel="noopener noreferrer" target='_blank'>
                        <div className='cardHeader'>
                            <h5>Full Stack</h5>
                            
                        </div>
                        <div className='cardInfo'><h4>Vue Js & NodeJs</h4> <p>Painel Administrativo usando vue Router, vueX.<br/>Back end feito em nodeJS usando sequelize, postgres, JWT entre outros.</p> </div>
                        </a>
                        <div className='card-button'>
                         <a href='https:github.com/lucasecp/dashboard' rel="noopener noreferrer" target='_blank'><FaGithub />github</a>
                         <a href='https://dashboard-loja.netlify.app/' rel="noopener noreferrer" target='_blank'><FaArrowRight/>Acessar</a>

                        </div>
                        </div>
                    </div>
                  
                    <div className=' col-md-6 col-lg-4 mt-4 mt-lg-0' >
                        <div className='card-content'>
                            <a href="https://meushobbies.netlify.app/" rel="noopener noreferrer" target='_blank'>
                        <div className='cardHeader'>
                            <h5>Front end</h5>
                            
                        </div>
                        <div className='cardInfo'><h4>html, css & javascript</h4> <p>Website usando css grid layout.</p> </div>
                            </a>
                        <div className='card-button'>
                         <a href='https://github.com/lucasecp/hobbies' rel="noopener noreferrer" target='_blank'><FaGithub />github</a>
                         <a href='https://meushobbies.netlify.app/' rel="noopener noreferrer" target='_blank'><FaArrowRight/>Acessar</a>
                    </div>
                    </div>
                        </div>
                </div>


            </section>
        </main>
    </>)
}