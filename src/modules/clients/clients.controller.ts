import ClientsServices from "./clients.service";
import { Request, Response } from 'express'

export default class ClientsController {


    private _clientsServices: ClientsServices

    constructor() {
        this._clientsServices = new ClientsServices()
    }

    async createClient(request: Request, response: Response) {
        const { name, email, contact, locationX, locationY, owner } = request.body

        const result = await this._clientsServices.createClient({
            name,
            email,
            contact,
            locationX,
            locationY,
            owner
        })

        return response.status(result.statusCode).json(result)

    }

    async updateClientLocation(request: Request, response: Response) {
    }
}