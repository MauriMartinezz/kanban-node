"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Middleware that transform req.body to JSON
const PORT = 3000;
// _ tells typescript to ignore a parameter
// also can be _res to ignore the request parameter
app.get("/ping", (_req, res) => {
    console.log("Someone pingend here!");
    res.send("pong");
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
