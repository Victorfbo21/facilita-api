import { PrismaClient } from "@prisma/client";
import { CreateClientDto } from "./dtos/create.dto";
import { UpdateClientLocationDto } from "./dtos/update-location.dto";

export default class ClientsRepository {

    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async createClient(client: CreateClientDto) {
        try {
            const created = await this.prisma.clients.create({ data: client })

            return created
        }
        catch (error) {
            return null
        }
    }

    async getClientByOwner(ownerId: string) {
        try {
            const client = await this.prisma.clients.findMany({
                where: {
                    owner: ownerId
                }
            })

            return client
        }
        catch (error) {
            return null
        }
    }

    async getClientByNameAndEmail(name: string, email: string) {
        try {
            const client = await this.prisma.clients.findFirst({
                where: {
                    AND: [{
                        email: email,
                        name: name
                    }]
                }
            })

            return client
        }
        catch (error) {
            return null
        }
    }

    async getClientById(clientId: string) {
        try {
            const client = await this.prisma.clients.findFirst({
                where: {
                    id: clientId
                }
            })

            return client
        }
        catch (error) {
            return null
        }
    }

    async updateClintLocation(updateLocation: UpdateClientLocationDto) {
        try {
            const updated = await this.prisma.clients.update({
                where: {
                    id: updateLocation.clientId
                },
                data: {
                    locationX: updateLocation.locationX,
                    locationY: updateLocation.locationY
                }
            })

            return updated

        }
        catch (error) {
            return null
        }
    }

}