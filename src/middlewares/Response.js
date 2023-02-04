const success = (req,res,message,detail = "",status=200)=>{
    console.log(detail);
    return res.status(status).json({
        message
    })
};

const error = (req,res,err,detail = "",status=500)=>{
    console.log(detail);
    return res.status(status).json({
        err
    })
};

module.exports = {
    success,
    error
}