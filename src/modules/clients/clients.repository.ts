import { PrismaClient } from "@prisma/client";
import { CreateClientDto } from "./dtos/create.dto";

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

}