"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const rockets = require('./data/products');
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get("/", (req, res) => {
    res.send('API is running...');
});
app.get("/api/rockets", (req, res) => {
    res.json(rockets);
});
app.get("/api/rockets/:id", (req, res) => {
    const rocket = rockets.find((r) => r._id == req.params.id);
    res.json(rocket);
});
app.listen(port, () => {
    console.log(`Server is running at: ${port}`);
});
