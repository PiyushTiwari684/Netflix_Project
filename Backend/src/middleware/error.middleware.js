const error = (err,req,res,next) =>{
       if(err.name === "validation error"){
        err.statusCode = 400;
        err.message = Object.values(err.errors).map((ele)=>ele.message);
       }

       if(err.name === "jsonwebTokenErrror"){
        err.statusCode = 401;
        err.message = "Please Login Again";
       }

       err.message = err.message || "Internal Server Error From error middleware";
       err.statusCode =  err.statusCode || 500;

       res.status(err.statusCode).json({
        success:false,
        message : err.message,
        errObj : err,
       });
}

export default error;