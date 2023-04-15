const express = require('express');
const app = express();
const dotenv = require('dotenv').config({ path: './config/config.env' });

require('./startup/db')();
require('./startup/routers')(app);




const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT} !`);
})