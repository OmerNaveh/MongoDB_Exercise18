function errorHandler(error,req,res,next){
    if(error.message){
        res.send(error.message);
    }else{
        res.send(error);
    }
}
module.exports = errorHandler;