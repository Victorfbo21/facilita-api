import { PrismaClient } from '@prisma/client'
import { CreateCompanyDto } from './dtos/create.dto'

export default class CompanyRepository {

    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }


    async createCompany(company: CreateCompanyDto) {
        try {
            const create = await this.prisma.company.create({ data: company })

            return create
        }
        catch (error) {
            return null
        }
    }

    async getCompanyByEmailAndName(name: string, email: string) {
        try {
            const company = await this.prisma.company.findFirst({
                where: {
                    AND: [{
                        name: name,
                        email: email
                    },
                    ]
                }
            })
            return company
        }
        catch (error) {
            return null
        }
    }

}