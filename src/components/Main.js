import React from 'react'
import './assets/css/main.css'

export default () => {

    return (<>
        <main >
            <section id='skills' >
                <h2 >Conhecimentos</h2>
                <div className='cards'>

                    <div>HTML <br />5</div>
                    <div className='js'>Javascript</div>  
                    <div>CSS <br/>3</div> 
                     <div className='bt'>Bootstrap</div> 
                      <div>React</div>
                        <div>Node</div> 
                         <div>Mysql</div> 
                          <div>git</div>

                </div>
            </section>
            <section id='projects' className='projects'>

                <h2 >Projetos</h2>
                <div className='cardContainer'>
                    <div className='cardImg'></div>
                    <div className='cardInfo'><span>Html/Css/Js + Node + MongoDb <br /> Curso online Udemy</span></div>
                    <div className='cardButton'> <button > <a href='https://agenda.lucasemerson.com.br' rel="noopener noreferrer" target='_blank'>Acessar</a></button></div>
                </div>
            </section>
        </main>

    </>)
}