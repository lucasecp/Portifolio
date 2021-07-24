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
            <div className={theme === 'dark'? 'darkForm ' : '' }>
                <div className='container-xl py-4'>
                <div className='row'>
                <form onSubmit={handleSubmit} className='formFeedback col-md-7' id='contacts'>
                    <h3>Contato</h3>
                    <div className='form-row'>
                    <div className="form-group col-md-6">
                    <label htmlFor='name'>Nome:</label>
                    <input className='form-control' id='name' maxLength='70' required type='text' value={name} onChange={e=> setName(e.target.value)} name='name' />

                    </div>
                    <div className="form-group col-md-6">
                    <label  htmlFor='email'>Email:</label>
                    <input className='form-control' id='email' maxLength='70' required type='email' value={email} onChange={e=> setEmail(e.target.value)} name='email' />
                    </div>
                    <div className="form-group col-12">
                    <label htmlFor='comments'>Mensagem:</label>
                    <textarea className='form-control' id='comments' maxLength='400' required type='text' value={msg} onChange={e=> setMsg(e.target.value)} name='comments'></textarea>
                    </div>

                    </div>
                    <button className='mt-4' type='submit' disabled={disable}>Enviar</button>
                    <Spinner className='spinner' animation={loading ? 'border' : ''} variant="primary"/>
                </form>
                <div className='networks col-md-5 mt-3 mt-md-0 '>
                <h3>Redes Sociais</h3>
                <ul className='contacts'>
                <li><a href='https://github.com/lucasecp' target='_blank'  rel="noopener noreferrer"><FaGithub className='contact-img github' color='black'/>github.com/lucasecp</a></li>
                <li><a href='https://api.whatsapp.com/send?phone=5521993371281'  rel="noopener noreferrer" target='_blank'><FaWhatsapp className='contact-img' color='#32CD32 '/>(21) 9 9337-1281</a></li>
                <li><a href='https://www.linkedin.com/in/lucas-emerson/'  rel="noopener noreferrer" target='_blank'><FaLinkedin className='contact-img' color=' #2867B2'/>linkedin.com/in/lucas-emerson/</a></li>
            </ul>
            </div>

                </div>

                </div>

            </div>
        )
} 