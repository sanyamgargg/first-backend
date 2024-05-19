class apiRespone {
    constructor(statusCode, data, message="success"){
        this.statusCode = statusCode,
        this.data = data,
        this.message = message,
        this.success = statusCode < 400
    }
}

export {apiRespone}