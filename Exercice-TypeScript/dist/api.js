"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTodos = void 0;
function fetchTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "GET",
        });
        const todos = yield res.json();
        return todos.slice(0, 20);
    });
}
exports.fetchTodos = fetchTodos;
// export function fetchTodos() {
//   return fetch("https://jsonplaceholder.typicode.com/todos", {
//     method: "GET",
//   })
//     .then((res) => res.json())
//     .then((todos) => todos.slice(0, 20));
// }
