import CompanyRepository from "./company.repository";
import { CreateCompanyDto } from "./dtos/create.dto";
import { AppResponse } from "../../shared/http/appResponse";


export default class CompanyService {

    private _companyRepository: CompanyRepository

    constructor() {
        this._companyRepository = new CompanyRepository()
    }

    async createCompany(company: CreateCompanyDto) {

        const verifyExists = await this._companyRepository.getCompanyByEmailAndName(company.name, company.email)

        if (verifyExists) {
            return new AppResponse({
                data: null,
                error: true,
                statusCode: 404,
                message: 'Empresa Já Cadastrada'
            })
        }

        const create = await this._companyRepository.createCompany(company)

        if (!create) {
            return new AppResponse({
                data: null,
                error: true,
                statusCode: 500,
                message: 'Erro ao Criar Empresa'
            })
        }


        return new AppResponse({
            data: create.id,
            error: false,
            statusCode: 200,
            message: 'Empresa Criada com Sucesso!'
        })
    }
}