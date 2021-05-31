import express, { Application } from 'express';
import cors from 'cors';

import userRoutes from '../routes/users.routes';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/v1/users',
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '5000';

        this.middlewares();

        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //Parse body
        this.app.use(express.json());

        //Public folder
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

export default Server;
