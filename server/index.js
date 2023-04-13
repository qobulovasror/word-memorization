const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("hello world")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT} !`);
})