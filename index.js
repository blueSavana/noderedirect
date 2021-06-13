require ('dotenv').config()
const cors = require('cors')
const express = require ('express')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', (req,res)=> {
    res.redirect(process.env.SITE)
})
const PORT = Number(process.env.PORT) || 3000

app.listen(PORT, () => {console.log(` app running on port ${PORT} `)})