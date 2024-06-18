"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var genero_1 = require("../controllers/genero");
var auth_1 = __importDefault(require("../controllers/auth"));
var routerGenero = express.Router();
routerGenero.post("/generos/registrar", genero_1.addGenero);
routerGenero.get("/generos/listar", auth_1.default.hasAuthorization, genero_1.getGeneros);
routerGenero.put("/generos/atualizar/:id", auth_1.default.hasAuthorization, genero_1.updateGenero);
routerGenero.delete("/generos/remover/:id", auth_1.default.hasAuthorization, genero_1.deleteGenero);
routerGenero.get("/generos/buscar/:id", auth_1.default.hasAuthorization, genero_1.getGenero);
exports.default = routerGenero;
//# sourceMappingURL=genero.js.map