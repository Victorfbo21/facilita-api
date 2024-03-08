import ClientsController from "../../modules/clients/clients.controller";
import { Router, response } from "express";
import { request } from "http";



export const ClientsRoutes = Router();

const clientsController = new ClientsController()

ClientsRoutes.get('/', (request, response) => {

})


ClientsRoutes.post('/create', (request, response) => {
    return clientsController.createClient(request, response)
})


ClientsRoutes.post('/update-location', (request, response) => {
    return clientsController.createClient(request, response)
})