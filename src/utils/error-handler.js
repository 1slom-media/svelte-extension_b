
export default (error, req, res,next) => {
    if(error.status != 500){
        return res.status(error.status).json({
            status: error.status,
            message: error.message
        })
    }

    next(res.json(error.message));
    // process.exit() 
}