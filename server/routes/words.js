const router = require('express').Router();
const { getAllWord, getWordWithParam, addWord } = require('../controller/wordController');
const auth = require('../middleware/auth');

// get all words
router.get('/', auth, getAllWord);

//get words with params
router.get('/:id', auth, getWordWithParam);

// add word
router.post('/', auth, addWord);



module.exports = router;