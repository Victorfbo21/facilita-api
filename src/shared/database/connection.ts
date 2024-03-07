import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


export const DbConnect = async () => {

    const connection = await prisma.$connect()

    return connection
}