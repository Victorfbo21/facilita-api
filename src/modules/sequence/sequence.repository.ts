import { PrismaClient } from "@prisma/client";


export default class SequenceRepository {

    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async createSequece() {

    }
}