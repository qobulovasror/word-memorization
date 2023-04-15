const router = require('express').Router();

router.post('/', async(req, res)=>{
    res.send('this is auth');
})


module.exports = router;