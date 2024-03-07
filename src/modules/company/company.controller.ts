import CompanyService from "./company.service";
import { Request, Response } from 'express'


export default class CompanyController {

    private _companyService: CompanyService

    constructor() {
        this._companyService = new CompanyService()
    }


    async createCompany(request: Request, response: Response) {
        const { name, email } = request.body

        const result = await this._companyService.createCompany({
            name,
            email
        })
        return response.status(result.statusCode).json(result)
    }

}