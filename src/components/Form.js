import React from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import './assets/css/form.css'
import Spinner from 'react-bootstrap/Spinner'

export default class extends React.Component {
    state = {
        name: '',
        email: '',
        msg: '',
        errors: [],
        loading: false,
    }


    validate = () => {
        let { errors, name, email, msg } = this.state
        let newError = errors
   
        if (!email.trim() || !name.trim() || !msg.trim()) {
            newError.push('Campo(os) vazio(os)')    
        }
        
        this.setState({
            errors: newError
        })
    }
    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handleMsg = (e) => {
        this.setState({
            msg: e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault()
       
        const  {errors} = this.state
        let newError = errors
        
        this.validate()
        if(errors.length > 0) {
         newError.map(err=>toast.error(err))
         this.setState({
             errors: []
         })
        
         return
    }

   return this.sendMessage()               
    }
    sendMessage =  ()  => {
     this.setState({
         loading: true
     })
     const data = {
          name: this.state.name,
          email: this.state.email,
          comments: this.state.msg
      }
      setTimeout(()=>{
        this.resetForm()
        toast.success('Mensagem enviada.')
      },3000)

        axios.post('https://apiemail.lucasemerson.com.br/feedback',data)
       .then(res=> {
             console.log(res.status)
       })
       .catch(err=> {
           console.log(err)
           this.resetForm()
       })
       
    }
    resetForm = ()=>{
        this.setState({
            name: '',
            email:'',
            msg: '',
            errors: [],
            loading: false
        })
    }



    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} className='formFeedback'>
                    <h3>Contato</h3>

                    <label htmlFor='name'>Nome:</label>
                    <input maxLength='70' required type='text' value={this.state.name} onChange={this.handleName} name='name' />
                    <label  htmlFor='email'>Email:</label>
                    <input maxLength='70' required type='email' value={this.state.email} onChange={this.handleEmail} name='email' />
                    <label htmlFor='comments'>Mensagem:</label>
                    <textarea maxLength='400' required type='text' value={this.state.msg} onChange={this.handleMsg} name='comments'></textarea>
                    <Spinner className='spinner' animation={this.state.loading ? 'border' : ''} variant="primary"/>
                    <button type='submit'>Enviar</button>
                </form>
            </>
        )

    }
}  