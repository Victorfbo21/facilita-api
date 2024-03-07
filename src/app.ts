import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import { Request, Response, Express } from 'express';
import { Routes } from './shared/routes/index'

config({
    path: ".env"
})

export default class App {

    private app: Express;

    constructor() {
        this.app = express();
        this.initializeMiddlewares();
    }

    initializeMiddlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(Routes)
        this.app.use((req: Request, res: Response, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', '*');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            next();
        });
    }


    getApp(): Express {
        return this.app;
    }
}