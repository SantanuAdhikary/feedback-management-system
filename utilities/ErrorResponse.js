
class ErrorResponse extends Error 
{
    constructor(statuscode, msg)
    {
        super(msg);
        this.statuscode = statuscode;
    }
}

module.exports = ErrorResponse;