import { Router } from 'express'
import { ClientsRoutes } from './client.routes'
import { CompanyRoutes } from './company.routes'
import { SequenceRoutes } from './sequence.routes'

export const Routes = Router()


Routes.use('/client', ClientsRoutes)
Routes.use('/company', CompanyRoutes)
Routes.use('/sequence', SequenceRoutes)

