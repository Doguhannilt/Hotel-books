const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express()

dotenv.config()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


app.get('/api/set', async(req,res) => {
    console.log('test')
})

app.listen(7000, () => {console.log(`started with  `)})