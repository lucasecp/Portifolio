import React from 'react'
import {useTheme} from '../context/Theme'

export default () => {
    const {theme} = useTheme()
    return (<>
        <main className={theme === 'dark'? 'darkMain': ''}  >
            <section id='skills' >
                <h2 >Conhecimentos</h2>
                <div className='cards'>

                    <div className='html'>   HTML 5  <div><div></div></div> </div>
                    <div className='css'>CSS 3 / SASS  <div><div></div></div> </div>
                    <div className='js'>Javascript/ES6 <div><div></div></div> </div>
                    <div className='react'>React Js  <div><div></div></div> </div>
                    <div className='bt'>Bootstrap  <div><div></div></div> </div>
                    <div className='node'>Node  <div><div></div></div> </div>
                    <div className='mysql'>Mysql  <div><div></div></div> </div>
                    <div className='git'>Git  <div><div></div></div> </div>

                </div>
            </section>
            <section id='projects' className='projects'>

                <h2 >Projetos</h2>
                <div className='cardContainer'>
                    <div className='cardInfo'><span>Sistema CRUD JS <br />HTML- CSS- JS/NODE</span></div>
                    <div className='cardButton'> <a href='https://agenda.lucasemerson.com.br' rel="noopener noreferrer" target='_blank'>Acessar</a></div>
                </div>
            </section>
        </main>

    </>)
}