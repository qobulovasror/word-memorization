const monoose = require('mongoose');

module.exports = function(){
    monoose.connect('mongodb://localhost/word-memorization')
        .then(()=>{
            console.log('db connection sucsess');
        })
        .catch(err=>{
            console.log(err);
        })
}