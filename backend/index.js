const express = require('express')
const connectTodb = require('./db/connectionToDb');
const cors = require('cors')
const app = express();
const PORT = 8000;
 
connectTodb();
app.use(express.json());
app.use(cors())



app.use('/api/auth',require('./Routes/authen'))

app.listen(PORT,()=>{
    console.log("connected successfully to port :",PORT)
})