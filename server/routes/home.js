const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send('Hi every one, this is page for root router');
})

module.exports = router;