//custom error handler 
// may be use sometimes in our project 

export const errorHandler =(statusCode, message)=>{
   const error = new Error ()
   error.statusCode= statusCode
    error.message= message;
    return error;
}