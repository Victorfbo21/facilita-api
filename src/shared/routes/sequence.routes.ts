import SequenceController from "../../modules/sequence/sequence.controller";
import { Router, response } from "express";


export const SequenceRoutes = Router()

const sequenceController = new SequenceController

SequenceRoutes.get('/', (request, response) => {
    return sequenceController.requestSequence(request, response)
})