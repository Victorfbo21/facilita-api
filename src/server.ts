import App from './app'

import { DbConnect } from "../src/shared/database/connection";

class Server {

    private app: App;
    private port: number

    constructor() {
        this.app = new App();
        this.port = parseInt(process.env.BACKEND_PORT ?? "")
    }

    async startServer() {
        try {
            await DbConnect();
            this.app.getApp().listen(this.port, () => {
                console.log(`Server rodando em http://localhost:${this.port}`);
            });
        }
        catch (error) {
            console.log("Erro ao conectar ao banco", error);

        }
    }
}

const server = new Server();
server.startServer();