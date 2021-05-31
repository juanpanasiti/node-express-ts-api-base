"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_routes_1 = __importDefault(require("../routes/users.routes"));
class Server {
    constructor() {
        this.apiPaths = {
            users: '/api/v1/users',
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '5000';
        this.middlewares();
        this.routes();
    }
    middlewares() {
        //CORS
        this.app.use(cors_1.default());
        //Parse body
        this.app.use(express_1.default.json());
        //Public folder
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.users, users_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map