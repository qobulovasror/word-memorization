const app = require('express')();

require('./startup/db')();
require('./startup/routers')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT} !`);
})