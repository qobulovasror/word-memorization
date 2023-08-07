const jwt = require('jsonwebtoken');
const config = require('config');
const objectId = require('mongoose').Types.ObjectId;

module.exports = function auth(req, res, next){
    const token = req.header('x-auth-token');
    if(!token)
        return res.status(401).send("Token yuq");
    try{
        const decoded = jwt.verify(token, config.get('jwtAuthToken'));
        if(!decoded._id) 
            return res.status(401).json({"error": "userId is required"});
        if(!objectId.isValid(decoded._id)) 
            return res.status(401).json({"error": "userId must be of type objectId"});
        req.user = decoded;
        next();
    }
    catch(err){
        return res.status(400).send('Tokin yaroqsiz'+err);
    }
}


function parseJwt (token) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}