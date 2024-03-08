import { AppResponse } from "../../shared/http/appResponse";
import ClientsRepository from "../clients/clients.repository";
import SequenceRepository from "./sequence.repository";
import { calculateRoute } from '../../shared/utils/ordering'

export default class SequenceServices {

    private _sequenceRepository: SequenceRepository
    private _clientsRepository: ClientsRepository

    constructor() {
        this._sequenceRepository = new SequenceRepository()
        this._clientsRepository = new ClientsRepository()
    }


    async requestSequence(ownerId: string) {

        const clientsToOrder = await this._clientsRepository.getClientByOwner(ownerId)

        if (clientsToOrder?.length === 0) {
            return new AppResponse({
                data: null,
                error: true,
                statusCode: 404,
                message: 'Empresa Não possui clientes Cadastrados'
            })
        }

        const filter = clientsToOrder?.map((item, index) => ({
            client: item.name,
            locationX: item.locationX,
            locationY: item.locationY
        }));

        filter?.unshift({
            client: 'Empresa', locationX: 0, locationY: 0
        })

        const applyOdernation = calculateRoute(filter ?? [])

        const formatedOdernation = applyOdernation.map((index, i) => ({
            user: filter?.[index].client,
            position: i + 1
        }))


        console.log(formatedOdernation)

        return new AppResponse({
            data: formatedOdernation,
            error: false,
            statusCode: 200,
            message: 'Resutlado'
        })


    }

}