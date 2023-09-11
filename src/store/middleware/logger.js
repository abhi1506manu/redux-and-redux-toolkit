const logger = param=>store => next => action=>{
    console.log("Logging to console",param);
   
    next(action)


}

export default logger;