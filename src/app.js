const cors = require ("cors");
const express = require("express");
const router = require ("./routes")

class App{ 
    constructor () {
        this.server = express();
        this.middlewares();
        this.rotes();
        this.server.use(cors());
    }

    middlewares () {
        this.server.use(express.json());
    }

    rotes () {
        this.server.use(router);
    }
}

module.exports = new App().server;
