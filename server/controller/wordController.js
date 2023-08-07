const { Word, wordValidate } = require("../models/word")
const objectId = require('mongoose').Types.ObjectId;

const getAllWord = async (req, res) => {
    try {
        const {status, name, translation, sort, skip, pageSize} = req.params;
        const userId = req.user._id;
        console.log(status, name, translation, sort, skip, pageSize);
        const word = await Word.find({userId: userId});
        res.send(word);
    } catch (error) {
        res.status(500).json({ error: `Data fetch error: ${error}`});
    }
};


const getWordWithParam = async (req, res) => {
    try {
        const userId = req.user._id;
        const id = req.params;
        if(id) 
            return res.status(401).json({"error": "id is invalid"});
        const word = await Word.find({userId: userId, _id: id});
        res.send(word);
    } catch (error) {
        res.status(500).json({ error: `Data fetch error: ${error}`});
    }
};

const addWord = async (req, res) => {
    try{
        const userId = req?.user?._id;
        const {error} = wordValidate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        let word = new Word({
            name: req.body.name,
            transcription: req.body.transcription,
            translation: req.body.translation,
            status: req.body.status,
            userId: userId
        });
        word = await word.save();
        res.send(word);
    } catch(error){
        res.status(500).json({ error: `Data fetch error: ${error}`});
    }
}

const updateWord = async (req, res) => {
    try{
        // const userId = req?.user?._id;
        // if(!userId) 
        //     return res.status(401).json({"error": "userId is required"});
        // if(!objectId.isValid(userId)) 
        //     return res.status(401).json({"error": "userId must be of type objectId"});
        
    }catch(error){
        res.status(500).json({ error: `Data fetch error: ${error}`});
    }
}

module.exports = {
    getAllWord,
    getWordWithParam,
    addWord
}