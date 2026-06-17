require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');
const projectRoutes = require('./routes/projectRoutes');
connectDB();
app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.json({message:'Welcome to the Skill2Project API!'})
})

app.use('/api/projects',projectRoutes);

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})