import React,{useState} from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import {FaLinkedin} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {useTheme} from '../context/Theme'

export default function () {

      const {theme} = useTheme()

       const [name,setName] =useState('') 
      const [email,setEmail] =useState('')
       const [msg,setMsg] =useState('') 
       const [errors,setErrors] =useState([]) 
       const [loading,setLoading] =useState(false) 
       const [disable, setDisable] = useState(false)


    const validate = () => {
        let newError = errors
        let newName = name
        let newEmail = email
        let newMsg = msg
   
        if (!newEmail.trim() || !newName.trim() || !newMsg.trim()) {
            newError.push('Campo(os) vazio(os)')    
        }
        
        setErrors(newError)
    }
   const handleSubmit = (e)=>{
        e.preventDefault()
       
        const newError = errors
        
        validate()
        if(errors.length > 0) {
         newError.map(err=>toast.error(err))
         setErrors([])
         return
    }

   return sendMessage()               
    }
    const sendMessage =  ()  => {
     setLoading( true)
     setDisable(true)
     const data = {
          name: name,
          email: email,
          comments: msg
      }
      setTimeout(()=>{
        resetForm()
        toast.success('Mensagem enviada.')
      },3000)

        axios.post('https://apinodemail.herokuapp.com/feedback',data)
       .then(res=> {
             console.log(res.status)
       })
       .catch(err=> {
           console.log(err)
           resetForm()
       })
       
    }
   const resetForm = ()=>{
       setName('')
       setEmail('')
       setErrors([])
       setLoading(false)
       setMsg('')
       setDisable(false)
    }

        return (
            <div className={theme === 'dark'? 'darkForm formContainer' : 'formContainer' }>
                <form onSubmit={handleSubmit} className='formFeedback' id='contacts'>
                    <h3>Contato</h3>

                    <label htmlFor='name'>Nome:</label>
                    <input maxLength='70' required type='text' value={name} onChange={e=> setName(e.target.value)} name='name' />
                    <label  htmlFor='email'>Email:</label>
                    <input maxLength='70' required type='email' value={email} onChange={e=> setEmail(e.target.value)} name='email' />
                    <label htmlFor='comments'>Mensagem:</label>
                    <textarea maxLength='400' required type='text' value={msg} onChange={e=> setMsg(e.target.value)} name='comments'></textarea>
                    <button type='submit' disabled={disable}>Enviar</button>
                    <Spinner className='spinner' animation={loading ? 'border' : ''} variant="primary"/>
                </form>
                <div className='networks'>
                <h3>Redes Sociais</h3>
                <ul className='contacts'>
                <li><a href='https://github.com/lucasecp' target='_blank'  rel="noopener noreferrer"><FaGithub className='contact-img github' color='black'/>github.com/lucasecp</a></li>
                <li><a href='https://api.whatsapp.com/send?phone=5521993371281'  rel="noopener noreferrer" target='_blank'><FaWhatsapp className='contact-img' color='#4AC959'/>(21) 9 9337-1281</a></li>
                <li><a href='https://www.linkedin.com/in/lucas-emerson/'  rel="noopener noreferrer" target='_blank'><FaLinkedin className='contact-img' color=' #2867B2'/>linkedin.com/in/lucas-emerson/</a></li>
            </ul>
            </div>
            </div>
        )
} 