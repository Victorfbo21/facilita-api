import ClientsRepository from "./clients.repository";
import { CreateClientDto } from "./dtos/create.dto";
import { AppResponse } from '../../shared/http/appResponse'

export default class ClientsServices {

    private _clientsServices: ClientsRepository

    constructor() {
        this._clientsServices = new ClientsRepository()
    }


    async createClient(client: CreateClientDto) {

        const registeredClient = await this._clientsServices.getClientByNameAndEmail(client.email, client.name)

        if (registeredClient) {
            return new AppResponse({
                data: null,
                error: true,
                statusCode: 404,
                message: 'Cliente já Cadastrado!'
            })
        }

        const created = await this._clientsServices.createClient(client)

        if (!created) {
            return new AppResponse({
                data: null,
                error: true,
                statusCode: 500,
                message: 'Erro ao Criar Cliente'
            })
        }


        return new AppResponse({
            data: created.id,
            error: false,
            statusCode: 200,
            message: 'Cliente Criado com Sucesso!'
        })
    }
}