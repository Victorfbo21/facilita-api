import CompanyController from '../../modules/company/company.controller'
import { Router } from 'express'


export const CompanyRoutes = Router()

const companyController = new CompanyController()


CompanyRoutes.get('/companys', (request, response) => {
})


CompanyRoutes.post('/create', (request, response) => {
    return companyController.createCompany(request, response)
}) 