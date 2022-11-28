"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos = [
    {
        id: 1,
        title: 'Acheter du pain',
        completed: false,
    },
    {
        id: 2,
        title: 'Introduire Express',
        completed: true,
    }
];
const app = (0, express_1.default)();
app.listen(8080, () => {
    console.log('Server started on port 8080');
});
