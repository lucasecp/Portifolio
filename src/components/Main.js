import React from 'react'
import {useTheme} from '../context/Theme'

export default () => {
    const {theme} = useTheme();


   
    window.addEventListener('scroll',function(){
        const progress = document.querySelectorAll('.progress');
        const windowScroll = this.scrollY;
        const nav =  document.querySelector('nav').offsetHeight + 550;
        if(progress.length === 0 ) return;
        
        for(let i=0 ; i < progress.length; i++){
            if(windowScroll > progress[i].offsetTop - nav ){
                progress[i].classList.remove('progress')
                
            }
        }
    })






    return (<>
        <main className={theme === 'dark'? 'darkMain': ''}  >
            <section id='skills' >
                <h2 >Habilidades</h2>
                <div className='cards'>

                    <div className='html'><span>HTML 5  </span> (intermediário) <div><div className='progress  '></div></div> </div>
                    <div className='css'><span>CSS 3 / SASS   </span> (intermediário) <div><div className='progress '></div></div> </div>
                    <div className='js'><span>Javascript(ES6) / Jquery   </span> (intermediário) <div><div className='progress '></div></div> </div>
                    <div className='react'><span>React Js   </span> (intermediário)  <div><div className='progress '></div></div> </div>
                    <div className='bt'><span>Bootstrap 4  </span> (intermediário) <div><div className='progress '></div></div> </div>
                    <div className='node'><span>Node   </span> (básico) <div><div className='progress '></div></div> </div>
                    <div className='mysql'><span>Mysql  </span> (intermediário) <div><div className='progress '></div></div> </div>
                    <div className='git'><span>Git  </span> (básico)  <div><div className='progress '></div></div> </div>

                </div>
            </section>
            <section id='projects' className='projects'>

                <h2 >Projetos</h2>
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