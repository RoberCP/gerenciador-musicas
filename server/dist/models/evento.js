"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evento = void 0;
var typeorm_1 = require("typeorm");
var usuario_1 = require("./usuario");
var musica_1 = require("./musica");
var Evento = /** @class */ (function () {
    function Evento() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Evento.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return usuario_1.Usuario; }),
        __metadata("design:type", usuario_1.Usuario)
    ], Evento.prototype, "id_usuario", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return musica_1.Musica; }),
        (0, typeorm_1.JoinTable)(),
        __metadata("design:type", Array)
    ], Evento.prototype, "musicas", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "date" }),
        __metadata("design:type", String)
    ], Evento.prototype, "data", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Evento.prototype, "nome_evento", void 0);
    Evento = __decorate([
        (0, typeorm_1.Entity)()
    ], Evento);
    return Evento;
}());
exports.Evento = Evento;
//# sourceMappingURL=evento.js.map