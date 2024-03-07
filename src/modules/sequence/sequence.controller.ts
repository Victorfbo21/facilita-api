import SequenceServices from "./sequence.service";
import { Request, Response } from "express";

export default class SequenceController {


    private _sequenceService: SequenceServices

    constructor() {
        this._sequenceService = new SequenceServices()
    }


    async requestSequence(request: Request, response: Response) {

        const { ownerId } = request.body


        const result = await this._sequenceService.requestSequence(ownerId)

        response.status(result.statusCode).json(result)
    }
}