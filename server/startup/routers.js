const express = require('express');

const home = require('../routes/home')

module.exports = function(app) {
    //middilwares
    app.use(express.json());
    
    //routes
    app.use('/', home);
}