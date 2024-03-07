import { IHttpResponseInterface } from "./httpResponse.interface";

export class AppResponse {
    public readonly data: any
    public readonly error: boolean
    public readonly statusCode: number
    public readonly message: string

    constructor({ data, error, statusCode, message }: IHttpResponseInterface) {

        this.data = data,
            this.error = error,
            this.statusCode = statusCode,
            this.message = message

    }
}

