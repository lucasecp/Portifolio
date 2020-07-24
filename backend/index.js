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
        host: 'SMTP.office365.com',
        port: 587,
        auth:{
            user: 'lucasecpgamer@outlook.com',
            pass: 'luc@s175935'
        }
       })
       const mailOptions ={
           from: 'lucasecpgamer@outlook.com',
           to:'lucasecp7@gmail.com',
           subject:`Mensagem de ${data.name}`,
           text: 'Mensagem',
           html: `<strong>Email: ${data.email}<br/><br/><br/><br/><br/><br/><div>${data.comments}</div><strong/>`
       }
       smtpTransport.sendMail(mailOptions)
       .then(msg=> {
          console.log(msg)
          return res.send(msg)
        })
       .catch(error=> {
         return res.send(error)
       } )
})

app.listen(port)