//admin
const admin = function(req,res,next){
    if(req.user.role !== "admin"){
        return res.status(403).send("The appeal was rejected");
    }
    next();
}

//user
const user = function(req,res,next){
    if(!req.user.role){
        return res.status(403).send("The appeal was rejected");
    }
    next();
}

module.exports.admin = admin;
module.exports.user = user;