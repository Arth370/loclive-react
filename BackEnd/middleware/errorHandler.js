export function errorHandler(err,req,res,next){
    console.log(err)

    const statusCode = error.statusCode || 500
    const message = errormessage || "internal server error"

    res.status(statusCode).json({
        succes:false,
        statusCode,
        message
    })
}

