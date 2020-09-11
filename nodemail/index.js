const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(helmet())

app.post('/api/feedback',(req,res)=>{
    const data = req.body
    const smtpTransport = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.PORTEMAIL,
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
       })
       const mailOptions ={
           from: process.env.EMAIL,   
           to:process.env.EMAILTO,
           subject:`Mensagem de ${data.name}`,
           text: 'Mensagem',
           html: `<strong>Email: ${data.email}<br/><br/><br/><br/><br/><br/><div>${data.comments}</div><strong/>`
       }
       smtpTransport.sendMail(mailOptions)
       .then(msg=> {
          return res.json(msg)
        })
       .catch(error=> {
         return res.json(error)
       } )
})

app.listen(port)
